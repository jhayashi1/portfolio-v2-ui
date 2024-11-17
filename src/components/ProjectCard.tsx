import {Card, Divider, Grid, ImageList, ImageListItem, Typography} from '@mui/material';
import type {FC} from 'react';
import {SkillsList} from './SkillsList';

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
            <Grid
                container
                direction='row'
                display='flex'
                spacing={2}
            >
                <Grid
                    item
                    sm={8}
                    xs={8}
                >
                    <Typography
                        sx={{ml: '1rem', mt: '1rem', fontWeight: 'semibold'}}
                        variant='h4'
                    >
                        {title}
                    </Typography>
                    <Divider sx={{mt: '0.5rem', backgroundColor: 'white', width: '7.5%'}} variant='middle' />
                    <SkillsList skills={skills} />
                    <Typography
                        sx={{m: '1rem'}}
                        variant="h6"
                    >
                        {description}
                    </Typography>
                </Grid>
                <Grid
                    item
                    alignItems='center'
                    display='flex'
                    justifyContent='center'
                    sm={4}
                    xs={4}
                >
                    <ImageList
                        cols={1}
                        sx={{m: '1rem'}}
                    >
                        <ImageListItem>
                            <img src='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'></img>
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
