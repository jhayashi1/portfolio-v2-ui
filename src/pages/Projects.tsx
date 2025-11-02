import {Box, Typography, Fade} from '@mui/material';
import {projectContent} from '../constants';
import type {FC} from 'react';
import {ProjectCard} from '../components/ProjectCard';

const PAGE_FADE_DURATION = 600;
const TITLE_FADE_DURATION = 400;
const CARD_FADE_START_DELAY = 800;
const CARD_FADE_STAGGER_DELAY = 150;

export const Projects: FC = () => {
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
                        {'Projects'}
                    </Typography>
                </Fade>
                {projectContent.map(({title, description, skills, image, link}, index) => (
                    <Fade
                        in
                        key={`${title} ${image} ${link}`}
                        timeout={CARD_FADE_START_DELAY + (index * CARD_FADE_STAGGER_DELAY)}
                    >
                        <Box>
                            <ProjectCard
                                description={description}
                                image={image}
                                link={link}
                                skills={skills}
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
