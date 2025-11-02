import {Box, Card, Typography} from '@mui/material';
import type {FC} from 'react';

export const SkillsList: FC<SkillsListProps> = ({skills}) => {
    return (
        <Box
            display='flex'
            flexWrap='wrap'
            justifyContent='left'
            sx={{m: 4}}
        >
            {skills.map((skill) => (
                <Card
                    key={skill}
                    sx={{mr: 4, borderWidth: 1, borderColor: 'steelblue', height: '100%'}}
                    variant='outlined'
                >
                    <Typography
                        sx={{m: 2}}
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
