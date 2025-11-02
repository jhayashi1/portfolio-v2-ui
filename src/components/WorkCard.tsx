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
            sx={{
                height      : '100%',
                my          : 8,
                borderTop   : '4px solid #2196f3',
                borderRadius: 2,
            }}
            variant='outlined'
        >
            <Typography
                sx={{ml: 4, mt: 4, fontWeight: 'semibold'}}
                variant='h4'
            >
                {company}
            </Typography>
            <Typography
                noWrap
                sx={{ml: 4, opacity: 0.6}}
                variant='h5'
            >
                {`${team ?? title}, ${time}`}
            </Typography>
            <Divider
                sx={{mt: 2, backgroundColor: 'white', width: '7.5%'}}
                variant='middle'
            />
            <SkillsList skills={skills} />
            <Typography
                sx={{m: 4}}
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
