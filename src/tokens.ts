export const colors = {
    // Accent Colors
    blue       : '#2196f3',
    dividerGrey: '#383838',
    // Interactive States
    hover      : {
        focus: 'rgba(255, 255, 255, 0.5)',
        light: 'rgba(255, 255, 255, 0.1)',
    },

    lightGrey: '#b3b3b3',

    // Primary Brand Colors
    primary  : '#1e1e1e',
    secondary: '#252525',
    // Shadows & Effects
    shadow   : {
        blue: {
            primary  : 'rgba(33, 150, 243, 0.15)',
            secondary: 'rgba(33, 150, 243, 0.1)',
        },
    },

    tertiary: '#2f2f2f',

    // Neutral Colors
    white: '#FFFFFF',
} as const;

// Border Tokens
export const borders = {
    accent: `4px solid ${colors.blue}`,
    focus : `2px solid ${colors.hover.focus}`,
    subtle: `1px solid ${colors.dividerGrey}`,
} as const;

// Shadow Tokens
export const shadows = {
    blueGlow: `0 8px 32px ${colors.shadow.blue.primary}, 0 4px 16px ${colors.shadow.blue.secondary}`,
    glow    : `0 8px 32px ${colors.shadow.blue.primary}, 0 4px 16px ${colors.shadow.blue.secondary}`,
} as const;

// Component Styling Tokens
export const components = {
    navigation: {
        container: {
            backgroundColor: colors.secondary,
            border         : `1px solid ${colors.tertiary}`,
            borderRadius   : 12, // 3 * 4 (theme spacing base)
            boxShadow      : 2,
            px             : 24, // 6 * 4
            py             : 8, // 2 * 4
        },
        wrapper: {
            display       : 'flex',
            justifyContent: 'center',
            pb            : 8, // 2 * 4
            pt            : 16, // 4 * 4
            px            : 16, // 4 * 4
        },
    },
} as const;
