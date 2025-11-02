import {Box, Typography, Fade} from '@mui/material';
import {workContent} from '../constants';
import {WorkCard} from '../components/WorkCard';
import type {FC} from 'react';

const PAGE_FADE_DURATION = 600;
const TITLE_FADE_DURATION = 400;
const CARD_FADE_START_DELAY = 800;
const CARD_FADE_STAGGER_DELAY = 150;

export const Work: FC = () => {
    return (
        <Fade
            in
            timeout={PAGE_FADE_DURATION}
        >
            <Box>
                <Fade
                    in
                    timeout={TITLE_FADE_DURATION}
                >
                    <Typography
                        sx={{ml: 0, fontWeight: 'semibold'}}
                        variant='h2'
                    >
                        {'Work Experience'}
                    </Typography>
                </Fade>
                {workContent.map(({company, description, skills, team, time, title}, index) => (
                    <Fade
                        in
                        key={`${company} ${title} ${time}`}
                        timeout={CARD_FADE_START_DELAY + (index * CARD_FADE_STAGGER_DELAY)}
                    >
                        <Box>
                            <WorkCard
                                company={company}
                                description={description}
                                skills={skills}
                                team={team}
                                time={time}
                                title={title}
                            />
                        </Box>
                    </Fade>
                ))}
                {/* <Divider sx={{mt: 2}} variant='middle' /> */}
            </Box>
        </Fade>
    );
};
