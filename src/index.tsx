import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter, Routes} from 'react-router-dom';
import {routes} from './routes';
import {TopNav} from './components/TopNav';
import {theme} from './theme';
import {Box, Container, Paper} from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                <Paper sx={{borderRadius: 0, flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <BrowserRouter>
                        <TopNav />
                        <Container maxWidth='xl'>
                            <Box sx={{mt: '3rem'}}>
                                <Routes>
                                    {routes}
                                </Routes>
                            </Box>
                        </Container>
                    </BrowserRouter>
                </Paper>
            </Box>
        </ThemeProvider>
    </React.StrictMode>
);
