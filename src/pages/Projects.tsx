import {Container, Typography} from '@mui/material';
import {projectContent} from '../constants';
import type {FC} from 'react';
import {ProjectCard} from '../components/ProjectCard';

export const Projects: FC = () => {
    return (
        <Container
            maxWidth='lg'
            sx={{mt: '3rem'}}
        >
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
                    link={link}
                    skills={skills}
                    title={title}
                />
            ))}
            {/* <Divider sx={{mt: 2}} variant='middle' /> */}
        </Container>
    );
};
