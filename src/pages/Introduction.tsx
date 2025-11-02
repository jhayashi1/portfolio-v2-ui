import {Typography, Fade, Box} from '@mui/material';
import type {FC} from 'react';
import {content} from '../constants';
import {SocialLinks} from '../components/SocialLinks';

export const Introduction: FC = () => (
    <Box
        sx={{
            mt           : '10vh',
            minHeight    : '70vh',
            display      : 'flex',
            flexDirection: 'column',
        }}
    >
        <Box sx={{flex: 1}}>
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
                <Box sx={{mt: 6}}>
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
                <Box sx={{mt: 16}}>
                    <Typography
                        noWrap
                        sx={{opacity: 0.6}}
                        variant='h4'
                    >
                        {content.statement}
                    </Typography>
                </Box>
            </Fade>
        </Box>
        <Fade
            in
            timeout={2500}
        >
            <Box>
                <SocialLinks />
            </Box>
        </Fade>
    </Box>
);
