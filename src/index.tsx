import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './components/main';
import { ThemeProvider } from '@emotion/react';
import { createTheme, useTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Paper } from '@mui/material';
import { TopNav } from './components/TopNav';

const theme = createTheme({
    palette: {
        mode: 'dark', 
        primary: {
            main: blue[500], 
        },
        background: {
            default: '#121212', 
            paper: '#1d1d1d', 
        },
    },
});

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