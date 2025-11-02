import {IconButton, Link} from '@mui/material';
import type {FC, ReactElement} from 'react';

interface SocialIconButtonProps {
    href: string;
    icon: ReactElement;
    hoverColor?: string;
}

export const SocialIconButton: FC<SocialIconButtonProps> = ({
    href,
    icon,
    hoverColor = '#ffffff',
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
                color     : 'white',
                p         : 0,
                transition: 'all 0.2s ease-in-out',
                '&:hover' : {
                    color    : hoverColor,
                    transform: 'scale(1.1)',
                    opacity  : 0.8,
                },
                '&:active': {
                    transform: 'scale(0.95)',
                },
                '&:focus': {
                    outline: '2px solid rgba(255, 255, 255, 0.5)',
                },
            }}
        >
            {icon}
        </IconButton>
    </Link>
);
