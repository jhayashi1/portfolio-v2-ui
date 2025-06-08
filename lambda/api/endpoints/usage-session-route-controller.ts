import type {APIGatewayProxyEventV2WithJWTAuthorizer, Context} from 'aws-lambda';
import Joi from 'joi';
import {parseEventBody} from '../utils';
import {usageSessionRoute} from './usage-session-route';


export const UsageRouteController = {
    validator: async (event: APIGatewayProxyEventV2WithJWTAuthorizer): Promise<[UsageSessionRequestBody]> => [
        await Joi
            .object<UsageSessionRequestBody>()
            .keys({
                sessionId: Joi.string().required(),
                platform : Joi.string().required(),
                timezone : Joi.string().required(),
                language : Joi.string().required(),
            })
            .validateAsync(parseEventBody<UsageSessionRequestBody>(event)),
    ],
    handler: async (event: APIGatewayProxyEventV2WithJWTAuthorizer, context: Context): Promise<UsageSessionResp> => {
        return await usageSessionRoute(event, context);
    },
};

export interface UsageSessionRequestBody {
    sessionId: string;
    platform: string;
    timezone: string;
    language: string;
}

export interface UsageSessionResp {
    sessionId: string;
    platform: string;
    timezone: string;
    language: string;
}
