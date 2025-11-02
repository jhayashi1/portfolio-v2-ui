import {Box, Button, Typography} from '@mui/material';
import type {FC} from 'react';
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
                pt            : 4,
                pb            : 2,
                px            : 4,
            }}
        >
            <Box
                sx={{
                    display        : 'flex',
                    alignItems     : 'center',
                    gap            : 1,
                    backgroundColor: 'secondary.main',
                    borderRadius   : 3,
                    px             : 6,
                    py             : 2,
                    boxShadow      : 2,
                    border         : '1px solid',
                    borderColor    : 'grey.800',
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
                                    fontWeight   : isActive ? 'bold' : 'semibold',
                                    textTransform: 'none',
                                    color        : 'inherit',
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
