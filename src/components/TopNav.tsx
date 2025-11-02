import {Box, Button, Typography} from '@mui/material';
import type {FC} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {pages} from '../constants';

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
                            component={Link}
                            key={page}
                            sx={{
                                display       : 'flex',
                                px            : 4,
                                py            : 2,
                                color         : 'inherit',
                                justifyContent: 'center',
                                alignItems    : 'center',
                                position      : 'relative',
                                borderRadius  : 2,
                                mx            : 1,
                                '&:hover'     : {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                                '&::after': {
                                    content     : '""',
                                    position    : 'absolute',
                                    bottom      : -4,
                                    left        : '50%',
                                    transform   : 'translateX(-50%)',
                                    width       : isActive ? '80%' : '0%',
                                    height      : '3px',
                                    bgcolor     : isActive ? '#2196f3' : 'primary.main',
                                    transition  : 'width 0.3s ease-in-out',
                                    borderRadius: '2px',
                                },
                                '&:hover::after': {
                                    width  : '80%',
                                    bgcolor: isActive ? '#2196f3' : 'primary.main',
                                },
                            }}
                            to={pages[page]}
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
