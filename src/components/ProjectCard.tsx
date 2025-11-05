import type {FC} from 'react';

import {Card, Divider, Grid, ImageList, ImageListItem, Typography} from '@mui/material';

import {borders, shadows} from '../tokens';
import {SkillsList} from './SkillsList';

export const ProjectCard: FC<ProjectCardProps> = ({
    description,
    image,
    link,
    skills,
    title,
}) => {
    return (
        <Card
            component='a'
            href={link}
            sx={{
                '&:hover': {
                    boxShadow: shadows.blueGlow,
                    transform: 'scale(1.05)',
                },
                borderRadius  : 2,
                borderTop     : borders.accent,
                color         : 'inherit',
                display       : 'block',
                height        : '100%',
                my            : 8,
                textDecoration: 'none',
                transition    : 'transform 0.2s, box-shadow 0.2s',
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
                        sx={{fontWeight: 'semibold', ml: 4, mt: 4}}
                        variant='h4'
                    >
                        {title}
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
                </Grid>
                <Grid
                    alignItems='center'
                    display='flex'
                    item
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
    description: string;
    image      : string;
    link       : string;
    skills     : string[];
    title      : string;
}
