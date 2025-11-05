import type {Boom} from '@hapi/boom';
import type {APIGatewayProxyEventV2WithJWTAuthorizer, APIGatewayProxyStructuredResultV2, Context} from 'aws-lambda';
import type {ValidationError} from 'joi';

export interface ApiGatewayInit {
    router: Router
}

export type ApiLambdaError =
    | AggregateError
    | Boom
    | Error
    | RangeError
    | ReferenceError
    | TypeError
    | URIError
    | ValidationError
export type ApiResult = APIGatewayProxyStructuredResultV2;

export interface Endpoint<O, P extends unknown[]> {
    handler: (event: APIGatewayProxyEventV2WithJWTAuthorizer, ...parameters: P) => Promise<O>;
    validator?: P extends []
        ? undefined
        : (event: APIGatewayProxyEventV2WithJWTAuthorizer) => Promise<P>;
}

export type LambdaFunction<R = void> = (event: APIGatewayProxyEventV2WithJWTAuthorizer, context: Context) => Promise<R>;
export type Router = Record<string, Endpoint<any, any>>;
