import {Box, Card, Divider, Typography} from '@mui/material';
import type {FC} from 'react';

export const WorkCard: FC<WorkCardProps> = ({
    company,
    title,
    time,
    team,
    description,
    skills,
}: WorkCardProps) => {
    return (
        <Card
            raised
            sx={{height: '100%', mb: '2rem'}}
            variant='outlined'
        >
            <Typography
                sx={{mb: 0, fontWeight: 'semibold'}}
                variant='h4'
            >
                {company}
            </Typography>
            <Typography
                noWrap
                sx={{mt: 0, opacity: 0.6}}
                variant='h5'
            >
                {`${team ?? title}, ${time}`}
            </Typography>
            <Divider sx={{mt: '0rem', backgroundColor: 'white', width: '7.5%'}} variant='middle' />
            <Box
                display='flex'
                flexWrap='wrap'
                justifyContent='left'
                sx={{m: '1rem'}}
            >
                {skills.map((skill) => (
                    <Card sx={{mr: '1rem', borderWidth: '0.15rem', borderColor: 'steelblue'}} variant='outlined'>
                        <Typography
                            sx={{m: '0.5rem'}}
                            variant="subtitle1"
                        >
                            {skill}
                        </Typography>
                    </Card>
                ))}
            </Box>
            <Typography
                sx={{m: '1rem'}}
                variant="h6"
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
