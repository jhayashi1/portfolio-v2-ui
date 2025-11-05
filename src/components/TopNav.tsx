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
                    backgroundColor: 'secondary.main',
                    border         : '1px solid',
                    borderColor    : 'grey.800',
                    borderRadius   : 3,
                    boxShadow      : 2,
                    display        : 'flex',
                    gap            : 1,
                    px             : 6,
                    py             : 2,
                }}
            >
                {Object.keys(pages).map((page) => {
                    const isActive = location.pathname === pages[page];
                    return (
                        <Button
                            className={isActive ? 'active' : ''}
                            component={Link}
                            key={page}
                            to={pages[page]}
                            variant='navButton'
                        >
                            <Typography
                                noWrap
                                sx={{
                                    color        : 'inherit',
                                    fontWeight   : isActive ? 'bold' : 'semibold',
                                    textTransform: 'none',
                                }}
                                variant='h6'
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
