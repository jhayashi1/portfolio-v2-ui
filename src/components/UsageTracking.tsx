import type {FC} from 'react';

import {useUsageTracking} from '../hooks/useUsageTracking';

export const UsageTracking: FC = () => {
    useUsageTracking();
    return null;
};
