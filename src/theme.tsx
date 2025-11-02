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
    spacing: (factor: number) => `${0.25 * factor}rem`,
    palette: {
        primary: {
            main        : colors.primary,
            contrastText: colors.white,
        },
        secondary: {
            main        : colors.secondary,
            contrastText: colors.white,
        },
        background: {
            default: colors.primary,
            paper  : colors.primary,
        },
        text: {
            primary  : colors.white,
            secondary: colors.lightGrey,
        },
    },
    components: {
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
        MuiDivider: createColorOverride(colors.dividerGrey),
        MuiCard   : {
            styleOverrides: {
                root: {
                    backgroundColor: colors.secondary,
                    borderColor    : colors.tertiary,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                //@ts-ignore
                root: {
                    fontWeight: 'normal',
                    whiteSpace: 'pre-wrap',
                    fontSize  : {
                        xs: '1rem',
                        md: '1.25rem',
                        lg: '1.5rem',
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            variants: [
                {
                    props: {variant: 'navButton'},
                    style: {
                        display       : 'flex',
                        paddingLeft   : 16,
                        paddingRight  : 16,
                        paddingTop    : 8,
                        paddingBottom : 8,
                        color         : 'inherit',
                        justifyContent: 'center',
                        alignItems    : 'center',
                        position      : 'relative',
                        borderRadius  : 8,
                        '&:hover'     : {
                            backgroundColor: colors.hover.light,
                        },
                        '&::after': {
                            content        : '""',
                            position       : 'absolute',
                            bottom         : -4,
                            left           : '50%',
                            transform      : 'translateX(-50%)',
                            width          : '0%',
                            height         : '3px',
                            backgroundColor: colors.blue,
                            transition     : 'width 0.2s ease-in-out',
                            borderRadius   : '2px',
                        },
                        '&.active::after': {
                            width: '80%',
                        },
                        '&.active .MuiTypography-root': {
                            fontWeight: 'bold',
                        },
                    },
                },
            ],
        },
    },
    typography: {
        fontFamily: 'Mulish',
    },
});
