import type {APIGatewayProxyEventV2WithJWTAuthorizer, Context} from 'aws-lambda';

import Joi from 'joi';

import {parseEventBody} from '../utils';
import {usageSessionRoute} from './usage-session-route';


export const UsageSessionRouteController = {
    handler: async (event: APIGatewayProxyEventV2WithJWTAuthorizer, context: Context): Promise<UsageSessionResp> => {
        return await usageSessionRoute(event, context);
    },
    validator: async (event: APIGatewayProxyEventV2WithJWTAuthorizer): Promise<[UsageSessionRequestBody]> => [
        await Joi
            .object<UsageSessionRequestBody>()
            .keys({
                currentTime: Joi.string().required(),
                language   : Joi.string().required(),
                platform   : Joi.string().required(),
                sessionId  : Joi.string().required(),
                timezone   : Joi.string().required(),
            })
            .validateAsync(parseEventBody<UsageSessionRequestBody>(event)),
    ],
};

export interface UsageSessionRequestBody {
    currentTime: string;
    language: string;
    platform: string;
    sessionId: string;
    timezone: string;
}

export interface UsageSessionResp {
    currentTime: string;
    language: string;
    platform: string;
    sessionId: string;
    timezone: string;
}
