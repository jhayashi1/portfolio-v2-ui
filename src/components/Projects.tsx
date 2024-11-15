import {Container} from '@mui/material';
import {CenteredTitle} from './CenteredTitle';
import {projectContent} from '../constants';
import type {FC} from 'react';
import {ProjectCard} from './ProjectCard';

export const Projects: FC = () => {
    return (
        <Container
            maxWidth='lg'
            sx={{p: '1rem'}}
        >
            <CenteredTitle title={'Projects'} />
            {projectContent.map(({title, description, skills}) => (
                <ProjectCard
                    description={description}
                    skills={skills}
                    title={title}
                />
            ))}
            {/* <Divider sx={{mt: 2}} variant='middle' /> */}
        </Container>
    );
};
