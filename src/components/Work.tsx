import {Container, Divider} from '@mui/material';
import {workContent} from '../constants';
import {CenteredTitle} from './CenteredTitle';
import {WorkCard} from './WorkCard';
import type {FC} from 'react';

export const Work: FC = () => {
    return (
        <Container
            maxWidth='lg'
            sx={{p: '1rem'}}
        >
            <CenteredTitle title={'Work'} />
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
            <Divider sx={{mt: 2}} variant='middle' />
        </Container>
    );
};
