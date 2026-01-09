import type {FC} from 'react';

import {Box, Button, Typography} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';

import {pages} from '../constants';

// Type declaration for the custom variant
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        navButton: true;
    }
}

export const TopNav: FC = () => {
    const location = useLocation();

    return (
        <Box
            sx={{
                display       : 'flex',
                justifyContent: 'center',
                pb            : 2,
                pt            : 4,
                px            : 4,
            }}
        >
            <Box
                sx={{
                    alignItems     : 'center',
                    backdropFilter : 'blur(16px)',
                    backgroundColor: 'rgba(30, 30, 30, 0.5)',
                    border         : '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius   : '50px',
                    display        : 'flex',
                    gap            : 1,
                    p              : 2,
                }}
            >
                {Object.keys(pages).map((page) => {
                    const isActive = location.pathname === pages[page];
                    return (
                        <Button
                            className={isActive ? 'active' : ''}
                            component={Link}
                            key={page}
                            sx={{
                                '&:hover': {
                                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                                },
                                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                                borderRadius   : '50px',
                                color          : isActive ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                                minWidth       : 'auto',
                                px             : 8,
                                py             : 2,
                                textTransform  : 'none',
                            }}
                            to={pages[page]}
                        >
                            <Typography
                                noWrap
                                sx={{
                                    color     : 'inherit',
                                    fontSize  : '1rem',
                                    fontWeight: isActive ? 600 : 500,
                                }}
                            >
                                {page}
                            </Typography>
                        </Button>
                    );
                })}
            </Box>
        </Box>
    );
};
