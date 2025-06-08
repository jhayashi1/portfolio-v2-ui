import {Box, Typography} from '@mui/material';
import {projectContent} from '../constants';
import type {FC} from 'react';
import {ProjectCard} from '../components/ProjectCard';

export const Projects: FC = () => {
    return (
        <Box>
            <Typography
                sx={{ml: 0, fontWeight: 'semibold'}}
                variant='h2'
            >
                {'Projects'}
            </Typography>
            {projectContent.map(({title, description, skills, image, link}) => (
                <ProjectCard
                    description={description}
                    image={image}
                    key={`${title} ${image} ${link}`}
                    link={link}
                    skills={skills}
                    title={title}
                />
            ))}
            {/* <Divider sx={{mt: 2}} variant='middle' /> */}
        </Box>
    );
};
