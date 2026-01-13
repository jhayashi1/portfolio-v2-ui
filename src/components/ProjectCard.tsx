import type {FC} from 'react';

import {Box, Card, Divider, Grid, Typography} from '@mui/material';

import {SkillsList} from './SkillsList';

export const ProjectCard: FC<ProjectCardProps> = ({
    description,
    image,
    link,
    skills,
    title,
}) => {
    return (
        <Box
            sx={{
                '&::before': {
                    background         : 'linear-gradient(90deg, #2196f3 0%, #1976d2 20%, #0097a7 40%, #00acc1 60%, #3f51b5 80%, #2196f3 100%)',
                    backgroundSize     : '200% 100%',
                    borderRadius       : 'inherit',
                    content            : '""',
                    inset              : 0,
                    mask               : 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite      : 'exclude',
                    opacity            : 0,
                    padding            : '2px',
                    pointerEvents      : 'none',
                    position           : 'absolute',
                    transition         : 'opacity 0.3s ease-in-out',
                    WebkitMask         : 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    zIndex             : 2,
                },
                '&:hover': {
                    '&::before': {
                        animation: 'gradientFlow 3s ease infinite',
                        opacity  : 1,
                    },
                    transform: 'scale(1.01)',
                },
                '@keyframes gradientFlow': {
                    '0%': {
                        backgroundPosition: '0% 50%',
                    },
                    '50%': {
                        backgroundPosition: '100% 50%',
                    },
                    '100%': {
                        backgroundPosition: '200% 50%',
                    },
                },
                borderRadius: 2,
                my          : 8,
                position    : 'relative',
                transition  : 'transform 0.2s, box-shadow 0.2s',
            }}
        >
            <Card
                component='a'
                href={link}
                sx={{
                    backdropFilter : 'blur(16px)',
                    backgroundColor: 'rgba(26, 35, 50, 0.95)',
                    border         : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius   : 2,
                    boxShadow      : '0 8px 32px rgba(0, 0, 0, 0.3)',
                    color          : 'inherit',
                    display        : 'block',
                    height         : '100%',
                    position       : 'relative',
                    textDecoration : 'none',
                    zIndex         : 1,
                }}
                variant='outlined'
            >
                <Grid
                    container
                    direction='row'
                >
                    <Grid
                        item
                        md={8}
                        sm={12}
                        xs={12}
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
                        item
                        md={4}
                        sm={12}
                        sx={{
                            display       : {md: 'flex', xs: 'none'},
                            overflow      : 'hidden',
                            position      : 'relative',
                        }}
                        xs={12}
                    >
                        <Box
                            component='img'
                            src={`/images/${image}`}
                            sx={{
                                borderRadius  : 2,
                                height        : (theme) => `calc(100% - ${theme.spacing(4)})`,
                                m             : 2,
                                objectFit     : 'cover',
                                objectPosition: 'left center',
                                width         : (theme) => `calc(100% - ${theme.spacing(4)})`,
                            }}
                        />
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
};

interface ProjectCardProps {
    description: string;
    image      : string;
    link       : string;
    skills     : string[];
    title      : string;
}
