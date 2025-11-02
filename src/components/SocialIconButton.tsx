import {IconButton, Link} from '@mui/material';
import type {FC, ReactElement} from 'react';
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
                color     : colors.white,
                p         : 0,
                transition: 'all 0.2s ease-in-out',
                '&:hover' : {
                    transform: 'scale(1.1)',
                    opacity  : 0.8,
                },
                '&:active': {
                    transform: 'scale(0.95)',
                },
                '&:focus': {
                    outline: `2px solid ${colors.hover.focus}`,
                },
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
