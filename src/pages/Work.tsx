import {Container, Typography} from '@mui/material';
import {workContent} from '../constants';
import {WorkCard} from '../components/WorkCard';
import type {FC} from 'react';

export const Work: FC = () => {
    return (
        <Container
            maxWidth='lg'
            sx={{mt: '3rem'}}
        >
            <Typography
                sx={{ml: 0, fontWeight: 'semibold'}}
                variant='h2'
            >
                {'Work Experience'}
            </Typography>
            {workContent.map(({company, description, skills, team, time, title}) => (
                <WorkCard
                    company={company}
                    description={description}
                    skills={skills}
                    team={team}
                    time={time}
                    title={title}
                />
            ))}
            {/* <Divider sx={{mt: 2}} variant='middle' /> */}
        </Container>
    );
};
