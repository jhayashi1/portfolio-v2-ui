import type {APIGatewayProxyEventV2WithJWTAuthorizer, Context} from 'aws-lambda';
import type {UsageRequestBody, UsageRequestResp} from './usage-route-controller';
import {parseEventBody} from '../utils';
import {putDynamoDb} from '../dynamo';

const USAGE_PAGE_TABLE = 'portfolio-usage-pages';

export const usageRoute = async (event: APIGatewayProxyEventV2WithJWTAuthorizer, _context: Context): Promise<UsageRequestResp> => {
    const {buffer, metadata} = parseEventBody<UsageRequestBody>(event);
    const {sessionId} = metadata;

    await Promise.all(
        buffer.map(async (entry) => {
            await putDynamoDb({
                TableName: USAGE_PAGE_TABLE,
                Item     : {
                    ...entry,
                    sessionId,
                },
            });
        })
    );

    return ({
        buffer,
        metadata,
    });
};
