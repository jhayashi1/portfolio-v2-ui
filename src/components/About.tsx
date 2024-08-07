import { Box, Card, Container, Divider, Typography } from '@mui/material';
import { content } from '../constants';
import { CenteredTitle } from './CenteredTitle';

export const About = () => {
    return (
        <Container
            maxWidth='lg'
            sx={{ p: '1rem' }}
        >
            <CenteredTitle title={'About me'} />
            <Card
                raised
                sx={{ height: '100%' }}
                variant='outlined'
            >
                <Typography
                    sx={{ m: '1rem' }}
                    variant="h6"
                >
                    {content.about}
                </Typography>
            </Card>
            <Divider sx={{ mt: '2rem' }} variant='middle' />
        </Container>
    );
};
