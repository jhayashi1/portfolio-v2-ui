import {Box, Container, Paper, ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes} from 'react-router-dom';

import {TopNav} from './components/TopNav';
import {UsageTracking} from './components/UsageTracking';
import {UserContextProvider} from './context';
import {routes} from './routes';
import {theme} from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <UserContextProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                    <Paper sx={{borderRadius: 0, display: 'flex', flex: 1, flexDirection: 'column'}}>
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
