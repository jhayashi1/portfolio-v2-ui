import {GitHub, LinkedIn} from '@mui/icons-material';
import {Button, Grid, IconButton, Typography} from '@mui/material';
import type {FC} from 'react';
import {content} from '../constants';

export const Introduction: FC = () => (
    <Grid
        container
        direction="column"
        spacing={2}
        sx={{mt: '3rem'}}
    >
        <Grid
            item
            sm={10}
            sx={{minHeight: '70vh'}}
            xs={12}
        >
            <Typography
                noWrap
                sx={{fontWeight: 'semibold'}}
                variant="h1"
            >
                {content.name}
            </Typography>
            <Typography
                noWrap
                sx={{mt: '1rem', opacity: 0.6}}
                variant="h3"
            >
                {content.title}
            </Typography>
            <Typography
                noWrap
                sx={{mt: '4rem', opacity: 0.6}}
                variant="h4"
            >
                {content.statement}
            </Typography>
        </Grid>
        <Grid
            item
            sm={2}
            xs={12}
        >
            <Grid
                container
                display='flex'
                justifyContent='left'
                spacing={2}
            >
                <Grid
                    item
                    sm={1}
                    xs={2}
                >
                    <IconButton
                        href='https://www.linkedin.com/in/jared-hayashi-2656541b7/' size='large'
                        sx={{color: 'white', p: 0}}
                    >
                        <GitHub fontSize='large' />
                    </IconButton>
                </Grid>
                <Grid
                    item
                    sm={1}
                    xs={2}
                >
                    <IconButton
                        href='https://www.linkedin.com/in/jared-hayashi-2656541b7/' size='large'
                        sx={{color: 'white', p: 0}}
                    >
                        <LinkedIn fontSize='large' />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);
