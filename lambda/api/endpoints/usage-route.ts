import type {APIGatewayProxyEventV2WithJWTAuthorizer, Context} from 'aws-lambda';

import type {UsageRequestBody, UsageRequestResp} from './usage-route-controller';

import {putDynamoDb} from '../dynamo';
import {parseEventBody} from '../utils';

const USAGE_PAGE_TABLE = 'portfolio-usage-pages';

export const usageRoute = async (event: APIGatewayProxyEventV2WithJWTAuthorizer, _context: Context): Promise<UsageRequestResp> => {
    const {buffer, metadata} = parseEventBody<UsageRequestBody>(event);
    const {sessionId} = metadata;

    await Promise.all(
        buffer.map(async (entry) => {
            await putDynamoDb({
                Item: {
                    ...entry,
                    sessionId,
                },
                TableName: USAGE_PAGE_TABLE,
            });
        })
    );

    return ({
        buffer,
        metadata,
    });
};
