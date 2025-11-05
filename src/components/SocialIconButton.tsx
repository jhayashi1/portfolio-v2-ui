import type {FC, ReactElement} from 'react';

import {IconButton, Link} from '@mui/material';

import {colors} from '../tokens';

export const SocialIconButton: FC<SocialIconButtonProps> = ({
    href,
    icon,
}) => (
    <Link
        href={href}
        rel='noopener noreferrer'
        sx={{textDecoration: 'none'}}
        target='_blank'
    >
        <IconButton
            size='large'
            sx={{
                '&:active': {
                    transform: 'scale(0.95)',
                },
                '&:focus': {
                    outline: `2px solid ${colors.hover.focus}`,
                },
                '&:hover': {
                    opacity  : 0.8,
                    transform: 'scale(1.1)',
                },
                color     : colors.white,
                p         : 0,
                transition: 'all 0.2s ease-in-out',
            }}
        >
            {icon}
        </IconButton>
    </Link>
);


interface SocialIconButtonProps {
    href: string;
    icon: ReactElement;
}
