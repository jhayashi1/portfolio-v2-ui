import type {FC} from 'react';

import {Box, Card, Typography} from '@mui/material';

export const SkillsList: FC<SkillsListProps> = ({skills}) => {
    return (
        <Box
            display='flex'
            flexWrap='wrap'
            gap={2}
            justifyContent='left'
            sx={{m: 4}}
        >
            {skills.map((skill) => (
                <Card
                    key={skill}
                    sx={{borderColor: 'steelblue', borderWidth: 1, height: '100%'}}
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
