import {UsageRouteController} from './endpoints/usage-route-controller';
import type {Router} from './types';
import {apiGatewayHandler} from './utils';

const router: Router = {
    'POST /usage': UsageRouteController,
};

export const handler = apiGatewayHandler({router});
