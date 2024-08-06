import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { createTheme, useTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Paper } from '@mui/material';
import { TopNav } from './components/TopNav';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <TopNav />
                <Routes>
                    {routes}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);