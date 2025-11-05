import type {APIGatewayProxyEventV2WithJWTAuthorizer, Context} from 'aws-lambda';

import type {UsageSessionRequestBody, UsageSessionResp} from './usage-session-route-controller';

import {getDynamoDb, putDynamoDb} from '../dynamo';
import {parseEventBody} from '../utils';

const USAGE_SESSION_TABLE = 'portfolio-usage-sessions';

export const usageSessionRoute = async (event: APIGatewayProxyEventV2WithJWTAuthorizer, _context: Context): Promise<UsageSessionResp> => {
    const body = parseEventBody<UsageSessionRequestBody>(event);
    const {sessionId} = body;

    const existing = await getDynamoDb({
        Key      : {sessionId},
        TableName: USAGE_SESSION_TABLE,
    });

    if (!existing.Item) {
        console.info(`session with id ${sessionId} doesn't exist, updating session table`);
        await putDynamoDb({
            Item     : body,
            TableName: USAGE_SESSION_TABLE,
        });
    }

    return body;
};
