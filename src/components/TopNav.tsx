import {AppBar, Box, Button, Container, Toolbar, Typography} from '@mui/material';
import type {FC} from 'react';
import {Link} from 'react-router-dom';
import {pages} from '../constants';

export const TopNav: FC = () => {
    return (
        <AppBar
            color='secondary'
            elevation={0}
            position='static'
            sx={{height: '5rem'}}
        >
            <Container maxWidth='xl' sx={{height: '100%'}}>
                <Toolbar disableGutters sx={{height: '100%'}}>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display : 'flex',
                            height  : '100%',
                        }}
                        textAlign='center'
                    >
                        {Object.keys(pages).map((page) => (
                            <Button
                                component={Link}
                                key={page}
                                sx={{
                                    display       : 'flex',
                                    p             : '2rem',
                                    color         : 'inherit',
                                    justifyContent: 'center',
                                    alignItems    : 'center',
                                }}
                                to={pages[page]}
                            >
                                <Typography
                                    noWrap
                                    sx={{fontWeight: 'semibold', textTransform: 'none'}}
                                    variant='h6'
                                >
                                    {page}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
