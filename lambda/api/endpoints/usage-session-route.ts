import type {APIGatewayProxyEventV2WithJWTAuthorizer, Context} from 'aws-lambda';
import {parseEventBody} from '../utils';
import {putDynamoDb, getDynamoDb} from '../dynamo';
import type {UsageSessionRequestBody, UsageSessionResp} from './usage-session-route-controller';

const USAGE_SESSION_TABLE = 'portfolio-usage-sessions';

export const usageSessionRoute = async (event: APIGatewayProxyEventV2WithJWTAuthorizer, _context: Context): Promise<UsageSessionResp> => {
    const body = parseEventBody<UsageSessionRequestBody>(event);
    const {sessionId} = body;

    const existing = await getDynamoDb({
        TableName: USAGE_SESSION_TABLE,
        Key      : {sessionId},
    });

    if (!existing.Item) {
        console.info(`session with id ${sessionId} doesn't exist, updating session table`);
        await putDynamoDb({
            TableName: USAGE_SESSION_TABLE,
            Item     : body,
        });
    }

    return body;
};
