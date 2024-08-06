import { createTheme } from '@mui/material';

const primaryColor = '#1d1d1d';
const secondaryColor = '#262626';

const createColorOverride = (color: string) => ({
    styleOverrides: {
        root: {
            backgroundColor: color,
        },
    },
});

export const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            light: '#262626',
            dark: '#121212',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: secondaryColor,
            light: '#303030',
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
        MuiCard: createColorOverride(secondaryColor),
        MuiDivider: createColorOverride('#303030'),
        MuiTypography: {
            styleOverrides: {
                root: {
                    margin: '1rem',
                },
            },
        },
    },
});
