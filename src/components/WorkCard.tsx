import { Box, Card, Container, Divider, Typography } from '@mui/material';

export const WorkCard = ({
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
            sx={{ height: '100%', mb: '2rem' }}
            variant='outlined'
        >
            <Typography
                sx={{ mb: 0, fontWeight: 'bold' }}
                variant='h4'
            >
                {company}
            </Typography>
            <Typography
                noWrap
                sx={{ mt: 0, opacity: 0.6 }}
                variant='h5'
            >
                {`${team ?? title}, ${time}`}
            </Typography>
            <Divider sx={{ mt: '1rem', backgroundColor: 'white', width: '10%' }} variant='middle' />
            <Box
                display='flex'
                flexWrap='wrap'
                justifyContent='left'
                sx={{ m: '1rem' }}
            >
                {skills.map((skill) => (
                    <Card sx={{ mr: '1rem', borderWidth: '0.15rem' }} variant='outlined'>
                        <Typography
                            sx={{ m: '0.5rem' }}
                            variant="subtitle1"
                        >
                            {skill}
                        </Typography>
                    </Card>
                ))}
            </Box>
            <Typography
                sx={{ m: '1rem' }}
                variant="h6"
            >
                {description}
            </Typography>
        </Card>
    );
};

interface WorkCardProps {
    company: string;
    title: string;
    time: string;
    team?: string;
    description: string;
    skills: string[];
}
