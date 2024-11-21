import {Card, Container, Typography} from '@mui/material';
import {content} from '../constants';
import type {FC} from 'react';

export const About: FC = () => {
    return (
        <Container
            maxWidth='lg'
            sx={{mt: '3rem'}}
        >
            <Typography
                sx={{ml: 0, fontWeight: 'semibold'}}
                variant='h2'
            >
                {'About me'}
            </Typography>
            <Card
                raised
                sx={{height: '100%', mt: '2rem'}}
                variant='outlined'
            >
                <Typography
                    sx={{m: '1rem', fontWeight: 'normal'}}
                    variant="h6"
                >
                    {content.about}
                </Typography>
            </Card>
            {/* <Divider sx={{mt: '2rem'}} variant='middle' /> */}
        </Container>
    );
};
