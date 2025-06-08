import type {Boom} from '@hapi/boom';
import {badImplementation, badRequest, clientTimeout} from '@hapi/boom';
import type {ApiGatewayInit, ApiLambdaError, ApiResult, LambdaFunction} from './types';
import type {APIGatewayProxyEventV2WithJWTAuthorizer} from 'aws-lambda';

export const boomApiError = (error: ApiLambdaError): Boom => (
    error.name === 'LambdaTimeoutError' ? clientTimeout()
        : error.name === 'ValidationError' ? badRequest(error.message)
            : 'isBoom' in error ? error
                : badImplementation(error)
);

export const apiGatewayHandler = (init: ApiGatewayInit): LambdaFunction<ApiResult> => {
    const {router} = init;

    return async (event, context) => {
        try {
            const method = event.requestContext.http.method;
            const [path] = event.rawPath.split('/').reverse();


            const key = event.routeKey in router
                ? event.routeKey
                : `${method} /${path}`;
            const fnc = router[key];

            console.info(`request mapped to: ${key}`);

            if (fnc.validator) {
                await fnc.validator(event);
            }

            return await fnc.handler(event, context);
        } catch (error) {
            console.error(`Error encountered during runtime ${error}`);

            const boomError = boomApiError(error as ApiLambdaError);
            const {statusCode, ...restBoomOutput} = boomError.output.payload;

            return {
                statusCode,
                body: JSON.stringify(restBoomOutput, null, 4),
            };
        }
    };
};

export const parseEventBody = <T>(event: APIGatewayProxyEventV2WithJWTAuthorizer): T => {
    try {
        return JSON.parse(event.body ?? '{}') as T;
    } catch {
        throw badRequest('Invalid JSON');
    }
};
