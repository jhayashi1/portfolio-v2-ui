export const colors = {
    // Primary Brand Colors
    primary  : '#1e1e1e',
    secondary: '#252525',
    tertiary : '#2f2f2f',

    // Accent Colors
    blue: '#2196f3',

    // Neutral Colors
    white      : '#FFFFFF',
    lightGrey  : '#b3b3b3',
    dividerGrey: '#383838',

    // Interactive States
    hover: {
        light: 'rgba(255, 255, 255, 0.1)',
        focus: 'rgba(255, 255, 255, 0.5)',
    },

    // Shadows & Effects
    shadow: {
        blue: {
            primary  : 'rgba(33, 150, 243, 0.15)',
            secondary: 'rgba(33, 150, 243, 0.1)',
        },
    },
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
            borderRadius   : 12, // 3 * 4 (theme spacing base)
            px             : 24, // 6 * 4
            py             : 8, // 2 * 4
            boxShadow      : 2,
            border         : `1px solid ${colors.tertiary}`,
        },
        wrapper: {
            display       : 'flex',
            justifyContent: 'center',
            pt            : 16, // 4 * 4
            pb            : 8, // 2 * 4
            px            : 16, // 4 * 4
        },
    },
} as const;
