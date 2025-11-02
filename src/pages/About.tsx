import {Card, Container, Typography, Fade} from '@mui/material';
import {content} from '../constants';
import type {FC} from 'react';

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
                        sx={{ml: 0, fontWeight: 'semibold'}}
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
                            mt          : 8,
                            borderTop   : '4px solid #2196f3',
                            borderRadius: 2,
                        }}
                        variant='outlined'
                    >
                        <Typography
                            sx={{m: 4, fontWeight: 'normal'}}
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
