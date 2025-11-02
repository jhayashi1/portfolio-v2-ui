import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter, Routes} from 'react-router-dom';
import {routes} from './routes';
import {TopNav} from './components/TopNav';
import {theme} from './theme';
import {Box, Container, Paper} from '@mui/material';
import {UsageTracking} from './components/UsageTracking';
import {UserContextProvider} from './context';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <UserContextProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                    <Paper sx={{borderRadius: 0, flex: 1, display: 'flex', flexDirection: 'column'}}>
                        <BrowserRouter>
                            <UsageTracking />
                            <TopNav />
                            <Container maxWidth='lg'>
                                <Box sx={{mt: 12}}>
                                    <Routes>
                                        {routes}
                                    </Routes>
                                </Box>
                            </Container>
                        </BrowserRouter>
                    </Paper>
                </Box>
            </ThemeProvider>
        </UserContextProvider>
    </React.StrictMode>
);
