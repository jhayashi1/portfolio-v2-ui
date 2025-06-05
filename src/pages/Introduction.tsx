import {GitHub, LinkedIn} from '@mui/icons-material';
import {Grid, IconButton, Typography, Fade, Box} from '@mui/material';
import type {FC} from 'react';
import {content} from '../constants';

export const Introduction: FC = () => (
    <Grid
        container
        direction='column'
    >
        <Grid
            item
            lg={10}
            md={12}
            sx={{minHeight: '75vh'}}
            xs={12}
        >
            <Fade
                in
                timeout={1000}
            >
                <Typography
                    noWrap
                    sx={{fontWeight: 'bold'}}
                    variant='h1'
                >
                    {content.name}
                </Typography>
            </Fade>
            <Fade
                in
                timeout={1500}
            >
                <Box sx={{mt: '1.5rem'}}>
                    <Typography
                        noWrap
                        sx={{opacity: 0.6}}
                        variant='h3'
                    >
                        {content.title}
                    </Typography>
                </Box>
            </Fade>
            <Fade
                in
                timeout={2000}
            >
                <Box sx={{mt: '4rem'}}>
                    <Typography
                        noWrap
                        sx={{opacity: 0.6}}
                        variant='h4'
                    >
                        {content.statement}
                    </Typography>
                </Box>
            </Fade>
        </Grid>
        <Fade
            in
            timeout={2500}
        >
            <Grid
                item
                lg={2}
                md={6}
                sm={12}
            >
                <Grid
                    container
                    columns={20}
                    display='flex'
                    justifyContent='left'
                >
                    <Grid
                        item
                        lg={1}
                    >
                        <IconButton
                            href='https://github.com/jhayashi1'
                            size='large'
                            sx={{color: 'white', p: 0}}
                        >
                            <GitHub sx={{fontSize: '3rem'}} />
                        </IconButton>
                    </Grid>
                    <Grid
                        item
                        lg={1}
                    >
                        <IconButton
                            href='https://www.linkedin.com/in/jared-hayashi-2656541b7/'
                            size='large'
                            sx={{color: 'white', p: 0}}
                        >
                            <LinkedIn sx={{fontSize: '3rem'}} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Fade>
    </Grid>
);
