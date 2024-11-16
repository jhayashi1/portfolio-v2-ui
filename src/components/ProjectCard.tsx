import {Box, Card, Divider, Grid, ImageList, ImageListItem, Typography} from '@mui/material';
import type {FC} from 'react';

export const ProjectCard: FC<ProjectCardProps> = ({
    title,
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
                {title}
            </Typography>
            <Divider sx={{mt: '0.5rem', backgroundColor: 'white', width: '7.5%'}} variant='middle' />
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
                            variant="subtitle1"
                        >
                            {skill}
                        </Typography>
                    </Card>
                ))}
            </Box>
            <Grid
                container
                display='flex'
                spacing={2}
            >
                <Grid
                    item
                    sm={8}
                    xs={12}
                >
                    <Typography
                        sx={{m: '1rem'}}
                        variant="h6"
                    >
                        {description}
                    </Typography>
                </Grid>
                <Grid
                    item
                    sm={4}
                    xs={12}
                >
                    <ImageList
                        cols={1}
                        rowHeight={200}
                        sx={{m: '1rem'}}
                    >
                        <ImageListItem>
                            <img></img>
                        </ImageListItem>
                    </ImageList>
                </Grid>
            </Grid>
        </Card>
    );
};

interface ProjectCardProps {
    title      : string;
    description: string;
    skills     : string[];
}
