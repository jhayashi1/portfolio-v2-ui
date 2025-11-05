import type {APIGatewayProxyEventV2WithJWTAuthorizer, Context} from 'aws-lambda';

import Joi from 'joi';

import type {UsageData, UsageMetadata} from '../../../src/hooks/useUsageTracking';

import {parseEventBody} from '../utils';
import {usageRoute} from './usage-route';


export const UsageRouteController = {
    handler: async (event: APIGatewayProxyEventV2WithJWTAuthorizer, context: Context): Promise<UsageRequestResp> => {
        return await usageRoute(event, context);
    },
    validator: async (event: APIGatewayProxyEventV2WithJWTAuthorizer): Promise<[UsageRequestBody]> => [
        await Joi
            .object<UsageRequestBody>()
            .keys({
                buffer: Joi.array().items(
                    Joi.object({
                        path     : Joi.string().required(),
                        timeSpent: Joi.number().required(),
                        to       : Joi.string().optional(),
                        ts       : Joi.number().required(),
                        type     : Joi.string().valid('CHANGE_PAGE', 'UNLOAD').required(),
                    })
                ).required(),
                metadata: Joi.object({
                    language : Joi.string().required(),
                    platform : Joi.string().required(),
                    sessionId: Joi.string().required(),
                    timezone : Joi.string().required(),
                }).required(),
            })
            .validateAsync(parseEventBody<UsageRequestBody>(event)),
    ],
};

export interface UsageRequestBody {
    buffer: UsageData[];
    metadata: UsageMetadata;
}

export interface UsageRequestResp {
    buffer: UsageData[];
    metadata: UsageMetadata;
}
