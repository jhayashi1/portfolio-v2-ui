import {Box, Card, Typography} from '@mui/material';
import type {FC} from 'react';

export const SkillsList: FC<SkillsListProps> = ({skills}) => {
    return (
        <Box
            display='flex'
            flexWrap='wrap'
            justifyContent='left'
            sx={{m: '1rem'}}
        >
            {skills.map((skill) => (
                <Card sx={{mr: '1rem', borderWidth: '0.15rem', borderColor: 'steelblue', height: '100%'}} variant='outlined'>
                    <Typography
                        sx={{m: '0.5rem'}}
                        variant='subtitle1'
                    >
                        {skill}
                    </Typography>
                </Card>
            ))}
        </Box>
    );
};

interface SkillsListProps {
    skills: string[];
}
