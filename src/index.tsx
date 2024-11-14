import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter, Routes} from 'react-router-dom';
import {routes} from './routes';
import {TopNav} from './components/TopNav';
import {theme} from './theme';
import {Box} from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Box sx={{pt: '6rem', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
                    <TopNav />
                    <Routes>
                        {routes}
                    </Routes>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
