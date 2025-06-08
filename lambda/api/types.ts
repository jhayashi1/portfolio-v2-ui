import type {APIGatewayProxyEventV2WithJWTAuthorizer, APIGatewayProxyStructuredResultV2, Context} from 'aws-lambda';
import type {Boom} from '@hapi/boom';
import type {ValidationError} from 'joi';

export interface Endpoint<O, P extends unknown[]> {
    validator?: P extends []
        ? undefined
        : (event: APIGatewayProxyEventV2WithJWTAuthorizer) => Promise<P>;
    handler: (event: APIGatewayProxyEventV2WithJWTAuthorizer, ...parameters: P) => Promise<O>;
}

export type Router = Record<string, Endpoint<any, any>>;
export type ApiResult = APIGatewayProxyStructuredResultV2;

export type ApiLambdaError =
    | ValidationError
    | Boom
    | Error
    | TypeError
    | ReferenceError
    | RangeError
    | URIError
    | AggregateError

export type LambdaFunction<R = void> = (event: APIGatewayProxyEventV2WithJWTAuthorizer, context: Context) => Promise<R>;
export interface ApiGatewayInit {
    router: Router
}
