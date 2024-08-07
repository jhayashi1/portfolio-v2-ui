import { createTheme } from '@mui/material';

const primaryColor = '#121212';
const secondaryColor = '#282828';
const tertiaryColor = '#424242';

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
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: secondaryColor,
            contrastText: '#FFFFFF',
        },
        background: {
            default: primaryColor,
            paper: primaryColor,
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#b3b3b3',
        },
    },
    components: {
        MuiDivider: createColorOverride('#303030'),
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: secondaryColor,
                    borderColor: tertiaryColor,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    margin: '1rem',
                },
            },
        },
    },
});
