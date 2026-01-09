import type {FC} from 'react';

import {Box, Fade, Typography} from '@mui/material';

import {SocialLinks} from '../components/SocialLinks';
import {content} from '../constants';

const PAGE_FADE_DURATION = 600;
const NAME_FADE_DURATION = 1000;
const STATEMENT_FADE_DURATION = 2000;
const SOCIAL_FADE_DURATION = 2500;

export const Introduction: FC = () => (
    <Fade
        in
        timeout={PAGE_FADE_DURATION}
    >
        <Box
            sx={{
                display       : 'flex',
                flexDirection : 'column',
                justifyContent: 'space-between',
                minHeight     : '85vh',
                pt            : {md: 24, xs: 12},
            }}
        >
            <Box
                sx={{
                    alignItems    : {md: 'flex-start', xs: 'center'},
                    display       : 'flex',
                    flexDirection : {md: 'row', xs: 'column'},
                    gap           : {md: 16, xs: 6},
                    justifyContent: 'center',
                    width         : '100%',
                }}
            >
                {/* Left side - Name */}
                <Fade
                    in
                    timeout={NAME_FADE_DURATION}
                >
                    <Box sx={{flex: {md: '0 0 auto', xs: '1'}, textAlign: {md: 'left', xs: 'center'}}}>
                        <Typography
                            sx={{
                                fontSize  : {lg: '5rem', md: '4rem', sm: '3rem', xs: '3rem'},
                                fontWeight: 300,
                                lineHeight: 1.2,
                            }}
                        >
                            {'Hi, I\'m '}
                            <Box
                                component='span'
                                sx={{fontWeight: 700}}
                            >
                                {content.name.split(' ')[0]}
                            </Box>
                        </Typography>
                    </Box>
                </Fade>

                {/* Right side - Description */}
                <Fade
                    in
                    timeout={STATEMENT_FADE_DURATION}
                >
                    <Box
                        sx={{
                            flex     : {md: 1, xs: 'auto'},
                            maxWidth : {md: '480px', xs: '100%'},
                            pt       : {md: 0.5, xs: 0},
                            textAlign: {md: 'left', xs: 'center'},
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize  : {lg: '1.5rem', md: '1.25rem'},
                                lineHeight: 2,
                                opacity   : 0.85,
                            }}
                        >
                            {'I\'m a '}
                            <Box
                                component='span'
                                sx={{fontWeight: 700, opacity: 1}}
                            >
                                {content.title}
                            </Box>
                            {' '}
                            {content.statement}
                        </Typography>
                    </Box>
                </Fade>
            </Box>

            <Fade
                in
                timeout={SOCIAL_FADE_DURATION}
            >
                <Box sx={{pb: 4, textAlign: 'center'}}>
                    <SocialLinks />
                </Box>
            </Fade>
        </Box>
    </Fade>
);
