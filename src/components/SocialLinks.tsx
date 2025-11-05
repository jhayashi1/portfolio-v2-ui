import {GitHub, LinkedIn} from '@mui/icons-material';
import {Box} from '@mui/material';
import {forwardRef} from 'react';

import {SocialIconButton} from './SocialIconButton';

export const SocialLinks = forwardRef<HTMLDivElement>((props, ref) => (
    <Box
        ref={ref}
        sx={{
            alignItems: 'flex-start',
            display   : 'flex',
            gap       : 12,
        }}
        {...props}
    >
        <SocialIconButton
            href='https://github.com/jhayashi1'
            icon={<GitHub sx={{fontSize: 48}} />}
        />
        <SocialIconButton
            href='https://www.linkedin.com/in/jared-hayashi-2656541b7/'
            icon={<LinkedIn sx={{fontSize: 48}} />}
        />
    </Box>
));

SocialLinks.displayName = 'SocialLinks';
