import {Description, Email, GitHub, LinkedIn} from '@mui/icons-material';
import {Box, Button} from '@mui/material';
import {forwardRef} from 'react';

import {socialLinks} from '../constants';
import {colors} from '../tokens';

const buttonStyles = {
    '& .MuiButton-startIcon': {
        '& > svg': {
            fontSize: {md: '2rem', xs: '1rem'},
        },
    },
    '&:hover': {
        backgroundColor: colors.hover.light,
        borderColor    : colors.blue,
    },
    borderColor  : colors.tertiary,
    borderRadius : 2,
    color        : colors.white,
    fontSize     : {md: '1rem', xs: '1rem'},
    px           : {md: 4, xs: 3},
    py           : {md: 2, xs: 2},
    textTransform: 'none',
};

export const SocialLinks = forwardRef<HTMLDivElement>((props, ref) => (
    <Box
        ref={ref}
        sx={{
            alignItems    : 'center',
            display       : 'flex',
            flexWrap      : 'wrap',
            gap           : 2,
            justifyContent: 'center',
        }}
        {...props}
    >
        <Button
            component='a'
            href={socialLinks.github}
            rel='noopener noreferrer'
            startIcon={<GitHub />}
            sx={buttonStyles}
            target='_blank'
            variant='outlined'
        >
            {'GitHub'}
        </Button>
        <Button
            component='a'
            href={socialLinks.linkedin}
            rel='noopener noreferrer'
            startIcon={<LinkedIn />}
            sx={buttonStyles}
            target='_blank'
            variant='outlined'
        >
            {'LinkedIn'}
        </Button>
        <Button
            component='a'
            href={socialLinks.email}
            startIcon={<Email />}
            sx={buttonStyles}
            variant='outlined'
        >
            {'Contact Me'}
        </Button>
        <Button
            component='a'
            href={socialLinks.resume}
            rel='noopener noreferrer'
            startIcon={<Description />}
            sx={buttonStyles}
            target='_blank'
            variant='outlined'
        >
            {'Resume'}
        </Button>
    </Box>
));

SocialLinks.displayName = 'SocialLinks';
