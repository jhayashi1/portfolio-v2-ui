import {Card, Divider, Typography} from '@mui/material';
import type {FC} from 'react';
import {SkillsList} from './SkillsList';

export const WorkCard: FC<WorkCardProps> = ({
    company,
    title,
    time,
    team,
    description,
    skills,
}) => {
    return (
        <Card
            raised
            sx={{height: '100%', my: '2rem'}}
            variant='outlined'
        >
            <Typography
                sx={{ml: '1rem', mt: '1rem', fontWeight: 'semibold'}}
                variant='h4'
            >
                {company}
            </Typography>
            <Typography
                noWrap
                sx={{ml: '1rem', opacity: 0.6}}
                variant='h5'
            >
                {`${team ?? title}, ${time}`}
            </Typography>
            <Divider
                sx={{mt: '0.5rem', backgroundColor: 'white', width: '7.5%'}}
                variant='middle'
            />
            <SkillsList skills={skills} />
            <Typography
                sx={{m: '1rem'}}
                variant='h6'
            >
                {description}
            </Typography>
        </Card>
    );
};

interface WorkCardProps {
    company    : string;
    title      : string;
    time       : string;
    team?      : string;
    description: string;
    skills     : string[];
}
