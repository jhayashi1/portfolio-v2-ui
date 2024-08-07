import {AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {pages} from '../constants';
import type {FC} from 'react';

export const TopNav: FC = () => {
    return (
        <AppBar
            color='secondary'
            position='fixed'
            sx={{height: '10vh'}}
        >
            <Container maxWidth="xl" sx={{height: '100%'}}>
                <Toolbar sx={{height: '100%'}}>
                    <Box
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        <Menu
                            keepMounted
                            disableScrollLock={true}
                            id="menu-appbar"
                            open={true}
                            sx={{display: {xs: 'block', md: 'none'}}}
                            transformOrigin={{vertical: 'top', horizontal: 'left'}}
                        >
                            {Object.keys(pages).map((page) => (
                                <MenuItem key={page}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: 'none', md: 'flex'},
                            height: '100%',
                        }}
                        textAlign='center'
                    >
                        {Object.keys(pages).map((page) => (
                            <Button
                                component={Link}
                                key={page}
                                sx={{
                                    display: 'flex',
                                    px: 2,
                                    mx: 2,
                                    color: 'inherit',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                to={pages[page]}
                            >
                                <Typography noWrap variant="subtitle1">
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
