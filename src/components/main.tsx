import { useState } from 'react';
import { Card, CardContent, Container, Grid, List, ListItemButton, ListItemText, Paper, Switch, TextField, Typography } from '@mui/material';
import { content } from '../constants';

export const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    if (!isLoading) {
        return (
            <Card sx={{flexDirection: 'column', flex: 1}} variant='outlined'>loading</Card>
        );
    }

    return (
        <Container maxWidth='xl' sx={{pt: 5}}>
            <Grid container display='flex' spacing={2}>
                <Grid item sm={4} xs={12}>
                    <Card sx={{height: '100%'}} variant='outlined'>
                        <CardContent>
                            <Typography
                                noWrap
                                sx={{mx: 2, mt: 2, fontWeight: 'bold'}}
                                variant="h3"
                            >
                                {content.name}
                            </Typography>
                            <Typography
                                noWrap
                                sx={{mx: 2}}
                                variant="h5"
                            >
                                {content.title}
                            </Typography>
                            <Typography
                                sx={{m: 2}}
                                variant="h6"
                            >
                                {content.statement}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={8} xs={12}>
                    <Card sx={{height: '100%'}} variant='outlined'>
                        <Typography
                            sx={{m: 2}}
                            variant="h6"
                        >
                            {content.introduction}
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};