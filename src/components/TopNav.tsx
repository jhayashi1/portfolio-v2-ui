import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const pages: Record<string, string> = {
    Home: '/',
    Work: '/work',
    Projects: '/projects',
    About: '/about',
};

export const TopNav = () => {
    return (
        <AppBar position='static' sx={{pb: 2}}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography
                        noWrap
                        component="h2"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        variant="h6"
                    >
                        Jared Hayashi
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Menu
                            keepMounted
                            id="menu-appbar"
                            open={true}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            {Object.keys(pages).map((page) => (
                                <MenuItem key={page}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {Object.keys(pages).map((page) => (
                            <Button
                                component={Link}
                                key={page}
                                sx={{ my: 2, mx: 2, color: 'inherit', display: 'block' }}
                                to={pages[page]}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};