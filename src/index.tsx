import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter, Routes} from 'react-router-dom';
import {routes} from './routes';
import {TopNav} from './components/TopNav';
import {theme} from './theme';
import {Box, Container, Paper} from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Paper sx={{borderRadius: 0, flex: 1, minHeight: '100vh'}}>
                    <Box sx={{pt: '6rem', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
                        <Container maxWidth='lg'>
                            <TopNav />
                            <Routes>
                                {routes}
                            </Routes>
                        </Container>
                    </Box>
                </Paper>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
