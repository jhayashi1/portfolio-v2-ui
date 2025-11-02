import {Typography, Fade, Box} from '@mui/material';
import type {FC} from 'react';
import {content} from '../constants';
import {SocialLinks} from '../components/SocialLinks';

const PAGE_FADE_DURATION = 600;
const NAME_FADE_DURATION = 1000;
const TITLE_FADE_DURATION = 1500;
const STATEMENT_FADE_DURATION = 2000;
const SOCIAL_FADE_DURATION = 2500;

export const Introduction: FC = () => (
    <Fade
        in
        timeout={PAGE_FADE_DURATION}
    >
        <Box
            sx={{
                mt           : '10vh',
                minHeight    : '70vh',
                display      : 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={{flex: 1}}>
                <Fade
                    in
                    timeout={NAME_FADE_DURATION}
                >
                    <Typography
                        noWrap
                        sx={{fontWeight: 'bold'}}
                        variant='h1'
                    >
                        {content.name}
                    </Typography>
                </Fade>
                <Fade
                    in
                    timeout={TITLE_FADE_DURATION}
                >
                    <Box sx={{mt: 6}}>
                        <Typography
                            noWrap
                            sx={{opacity: 0.6}}
                            variant='h3'
                        >
                            {content.title}
                        </Typography>
                    </Box>
                </Fade>
                <Fade
                    in
                    timeout={STATEMENT_FADE_DURATION}
                >
                    <Box sx={{mt: 16}}>
                        <Typography
                            noWrap
                            sx={{opacity: 0.6}}
                            variant='h4'
                        >
                            {content.statement}
                        </Typography>
                    </Box>
                </Fade>
            </Box>
            <Fade
                in
                timeout={SOCIAL_FADE_DURATION}
            >
                <SocialLinks />
            </Fade>
        </Box>
    </Fade>
);
