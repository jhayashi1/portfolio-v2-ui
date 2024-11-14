import {Card, Container, Typography} from '@mui/material';
import {content} from '../constants';
import {CenteredTitle} from './CenteredTitle';
import type {FC} from 'react';

export const About: FC = () => {
    return (
        <Container
            maxWidth='lg'
            sx={{p: '1rem'}}
        >
            <CenteredTitle title={'About me'} />
            <Card
                raised
                sx={{height: '100%'}}
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
