import type {FC} from 'react';

import {Card, Divider, Typography} from '@mui/material';

import {borders} from '../tokens';
import {SkillsList} from './SkillsList';

export const WorkCard: FC<WorkCardProps> = ({
    company,
    description,
    skills,
    team,
    time,
    title,
}) => {
    return (
        <Card
            sx={{
                borderRadius: 2,
                borderTop   : borders.accent,
                height      : '100%',
                my          : 8,
            }}
            variant='outlined'
        >
            <Typography
                sx={{fontWeight: 'semibold', ml: 4, mt: 4}}
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
                sx={{
                    backgroundColor: 'white',
                    ml             : 4,
                    mt             : 2,
                    width          : '10%',
                }}
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
    description: string;
    skills     : string[];
    team?      : string;
    time       : string;
    title      : string;
}
