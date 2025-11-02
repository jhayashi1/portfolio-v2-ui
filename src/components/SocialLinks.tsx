import {GitHub, LinkedIn} from '@mui/icons-material';
import {Box} from '@mui/material';
import {forwardRef} from 'react';
import {SocialIconButton} from './SocialIconButton';

export const SocialLinks = forwardRef<HTMLDivElement>((props, ref) => (
    <Box
        ref={ref}
        sx={{
            display   : 'flex',
            gap       : 12,
            alignItems: 'flex-start',
        }}
        {...props}
    >
        <SocialIconButton
            href='https://github.com/jhayashi1'
            icon={<GitHub sx={{fontSize: 48}} />}
        />
        <SocialIconButton
            hoverColor='#0077b5'
            href='https://www.linkedin.com/in/jared-hayashi-2656541b7/'
            icon={<LinkedIn sx={{fontSize: 48}} />}
        />
    </Box>
));

SocialLinks.displayName = 'SocialLinks';
