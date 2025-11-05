import type {FC} from 'react';

import {Card, Container, Fade, Typography} from '@mui/material';

import {content} from '../constants';
import {borders} from '../tokens';

const PAGE_FADE_DURATION = 600;
const TITLE_FADE_DURATION = 400;
const CONTENT_FADE_DURATION = 800;

export const About: FC = () => {
    return (
        <Fade
            in
            timeout={PAGE_FADE_DURATION}
        >
            <Container
                maxWidth='lg'
                sx={{mt: 12}}
            >
                <Fade
                    in
                    timeout={TITLE_FADE_DURATION}
                >
                    <Typography
                        sx={{fontWeight: 'semibold', ml: 0}}
                        variant='h2'
                    >
                        {'About me'}
                    </Typography>
                </Fade>
                <Fade
                    in
                    timeout={CONTENT_FADE_DURATION}
                >
                    <Card
                        raised
                        sx={{
                            borderRadius: 2,
                            borderTop   : borders.accent,
                            mt          : 8,
                        }}
                        variant='outlined'
                    >
                        <Typography
                            sx={{fontWeight: 'normal', m: 4}}
                            variant='h6'
                        >
                            {content.about}
                        </Typography>
                    </Card>
                </Fade>
                {/* <Divider sx={{mt: 8}} variant='middle' /> */}
            </Container>
        </Fade>
    );
};
