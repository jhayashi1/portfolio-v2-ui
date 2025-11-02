import {Card, Divider, Grid, ImageList, ImageListItem, Typography} from '@mui/material';
import type {FC} from 'react';
import {SkillsList} from './SkillsList';
import {borders, shadows} from '../tokens';

export const ProjectCard: FC<ProjectCardProps> = ({
    title,
    description,
    skills,
    image,
    link,
}) => {
    return (
        <Card
            component='a'
            href={link}
            sx={{
                height      : '100%',
                my          : 8,
                borderTop   : borders.accent,
                borderRadius: 2,
                transition  : 'transform 0.2s, box-shadow 0.2s',
                '&:hover'   : {
                    transform: 'scale(1.05)',
                    boxShadow: shadows.blueGlow,
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
                        sx={{ml: 4, mt: 4, fontWeight: 'semibold'}}
                        variant='h4'
                    >
                        {title}
                    </Typography>
                    <Divider
                        sx={{
                            mt             : 2,
                            ml             : 4,
                            backgroundColor: 'white',
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
                        sx={{mr: 4}}
                    >
                        <ImageListItem
                            sx={{
                                border      : 1,
                                borderColor : 'steelblue',
                                borderRadius: 2,
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
