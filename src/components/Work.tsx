import {Container, Divider} from '@mui/material';
import {content} from '../constants';
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
            <WorkCard
                company='John Deere'
                description={content.introduction}
                skills={['Typescript', 'React', 'Node', 'AWS', 'Terraform', 'API Gateway', 'PostgreSQL']}
                team='Digitize My Docs'
                time='2024 - Present'
                title='Software Engineer'
            />
            <WorkCard
                company='John Deere'
                description={content.introduction}
                skills={['Python', 'Java', 'AWS', 'Azure', 'Github Actions', 'Terraform', 'Docker']}
                team='Landing Zone'
                time='2023 - 2024'
                title='Software Engineer'
            />
            <WorkCard
                company='Kent Corporation'
                description={content.introduction}
                skills={['X++', 'Dynamics AX 2012', 'MSSQL']}
                team={undefined}
                time='2022'
                title='Application Developer Intern'
            />
            <Divider sx={{mt: 2}} variant='middle' />
        </Container>
    );
};
