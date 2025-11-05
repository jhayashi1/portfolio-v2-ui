import {createTheme} from '@mui/material';

import {colors} from './tokens';

const createColorOverride = (color: string): object => ({
    styleOverrides: {
        root: {
            backgroundColor: color,
        },
    },
});

export const theme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            variants: [
                {
                    props: {variant: 'navButton'},
                    style: {
                        '&.active .MuiTypography-root': {
                            fontWeight: 'bold',
                        },
                        '&.active::after': {
                            width: '80%',
                        },
                        '&::after': {
                            backgroundColor: colors.blue,
                            borderRadius   : '2px',
                            bottom         : -4,
                            content        : '""',
                            height         : '3px',
                            left           : '50%',
                            position       : 'absolute',
                            transform      : 'translateX(-50%)',
                            transition     : 'width 0.2s ease-in-out',
                            width          : '0%',
                        },
                        '&:hover': {
                            backgroundColor: colors.hover.light,
                        },
                        alignItems    : 'center',
                        borderRadius  : 8,
                        color         : 'inherit',
                        display       : 'flex',
                        justifyContent: 'center',
                        paddingBottom : 8,
                        paddingLeft   : 16,
                        paddingRight  : 16,
                        paddingTop    : 8,
                        position      : 'relative',
                    },
                },
            ],
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: colors.secondary,
                    borderColor    : colors.tertiary,
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: colors.primary,
                },
                html: {
                    backgroundColor: colors.primary,
                },
            },
        },
        MuiDivider   : createColorOverride(colors.dividerGrey),
        MuiTypography: {
            styleOverrides: {
                //@ts-ignore
                root: {
                    fontSize: {
                        lg: '1.5rem',
                        md: '1.25rem',
                        xs: '1rem',
                    },
                    fontWeight: 'normal',
                    whiteSpace: 'pre-wrap',
                },
            },
        },
    },
    palette: {
        background: {
            default: colors.primary,
            paper  : colors.primary,
        },
        primary: {
            contrastText: colors.white,
            main        : colors.primary,
        },
        secondary: {
            contrastText: colors.white,
            main        : colors.secondary,
        },
        text: {
            primary  : colors.white,
            secondary: colors.lightGrey,
        },
    },
    spacing   : (factor: number) => `${0.25 * factor}rem`,
    typography: {
        fontFamily: 'Mulish',
    },
});
