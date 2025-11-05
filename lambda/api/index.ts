import type {Router} from './types';

import {UsageRouteController} from './endpoints/usage-route-controller';
import {UsageSessionRouteController} from './endpoints/usage-session-route-controller';
import {apiGatewayHandler} from './utils';

const router: Router = {
    'POST /usage'        : UsageRouteController,
    'POST /usage/session': UsageSessionRouteController,
};

export const handler = apiGatewayHandler({router});
