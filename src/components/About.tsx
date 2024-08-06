import { Box, Card, Container, Divider, Typography } from '@mui/material';
import { content } from '../constants';

export const About = () => {
    return (
        <Container
            maxWidth='xl'
            sx={{ pt: 2 }}
        >
            <Card
                raised
                sx={{ height: '100%' }}
                variant='outlined'
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography
                        sx={{ mb: 0 }}
                        variant='h2'
                    >
                        About me
                    </Typography>
                    <Divider sx={{ mt: '1rem', backgroundColor: 'white', width: '10%' }} />
                </Box>
                <Typography
                    sx={{ m: 2 }}
                    variant="h6"
                >
                    {content.about}
                </Typography>
            </Card>
        </Container>
    );
};
