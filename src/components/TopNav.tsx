import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { content, pages } from '../constants';

export const TopNav = () => {
    return (
        <AppBar position='static' sx={{ height: 100 }}>
            <Container maxWidth="xl" sx={{ height: '100%' }}>
                <Toolbar sx={{ height: '100%' }}>
                    <Typography
                        noWrap
                        sx={{ mr: 2, color: 'inherit', fontWeight: 'bold' }}
                        variant="h5"
                    >
                        {content.name}
                    </Typography>
                    <Box
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Menu
                            keepMounted
                            id="menu-appbar"
                            open={true}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
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
                            display: { xs: 'none', md: 'flex' },
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
