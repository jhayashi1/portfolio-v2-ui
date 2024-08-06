import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1d1d1d',
            light: '#262626',
            dark: '#121212',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#262626',
            light: '#262626',
            dark: '#121212',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#121212',
            paper: '#1d1d1d',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#b3b3b3',
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#262626',
                },
            },
        },
    },
});