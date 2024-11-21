import {Card, Divider, Grid, ImageList, ImageListItem, Typography} from '@mui/material';
import type {FC} from 'react';
import {SkillsList} from './SkillsList';

export const ProjectCard: FC<ProjectCardProps> = ({
    title,
    description,
    skills,
    image,
    link,
}) => {
    return (
        <Card
            raised
            component='a'
            href={link}
            sx={{
                height    : '100%',
                my        : '2rem',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover' : {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                },
                textDecoration: 'none',
                color         : 'inherit',
                display       : 'block',
            }}
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
                        sx={{mr: '1rem'}}
                    >
                        <ImageListItem
                            sx={{
                                border      : '0.15rem solid steelblue',
                                borderRadius: '0.5rem',
                                overflow    : 'hidden',
                            }}
                        >
                            <img src={`/images/${image}`}></img>
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
    image      : string;
    link       : string;
}
