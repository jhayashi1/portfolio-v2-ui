import type {APIGatewayProxyEventV2WithJWTAuthorizer, Context} from 'aws-lambda';
import Joi from 'joi';
import {usageRoute} from './usage-route';
import {parseEventBody} from '../utils';
import type {UsageData, UsageMetadata} from '../../../src/hooks/useUsageTracking';


export const UsageRouteController = {
    validator: async (event: APIGatewayProxyEventV2WithJWTAuthorizer): Promise<[UsageRequestBody]> => [
        await Joi
            .object<UsageRequestBody>()
            .keys({
                metadata: Joi.object({
                    sessionId: Joi.string().required(),
                    platform : Joi.string().required(),
                    timezone : Joi.string().required(),
                    language : Joi.string().required(),
                }).required(),
                buffer: Joi.array().items(
                    Joi.object({
                        path     : Joi.string().required(),
                        to       : Joi.string().optional(),
                        timeSpent: Joi.number().required(),
                        ts       : Joi.number().required(),
                        type     : Joi.string().valid('CHANGE_PAGE', 'UNLOAD').required(),
                    })
                ).required(),
            })
            .validateAsync(parseEventBody<UsageRequestBody>(event)),
    ],
    handler: async (event: APIGatewayProxyEventV2WithJWTAuthorizer, context: Context): Promise<UsageRequestResp> => {
        return await usageRoute(event, context);
    },
};

export interface UsageRequestBody {
    metadata: UsageMetadata;
    buffer: UsageData[];
}

export interface UsageRequestResp {
    metadata: UsageMetadata;
    buffer: UsageData[];
}
