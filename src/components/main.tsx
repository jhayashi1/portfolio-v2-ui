import { useState } from 'react';
import { Card, CardContent, Container, Grid, List, ListItemButton, ListItemText, Paper, Switch, TextField, Typography } from '@mui/material';
import { homeContent } from '../constants';

export const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    if (!isLoading) {
        return (
            <Card sx={{flexDirection: 'column', flex: 1}} variant='outlined'>loading</Card>
        );
    }

    return (
        <Paper sx={{flex: 1, height: '100vh'}}>
            <Container maxWidth='xl'>
                <Grid container display='flex' spacing={2} sx={{pt: 10}}>
                    <Grid item sm={4} xs={12}>
                        <Card sx={{height: '100%'}} variant='outlined'>
                            <CardContent>
                                <Typography
                                    noWrap
                                    sx={{m: 2, fontWeight: 'bold'}}
                                    variant="h3"
                                >
                                    {homeContent.name}
                                </Typography>
                                <Typography
                                    noWrap
                                    sx={{m: 2}}
                                    variant="h5"
                                >
                                    {homeContent.title}
                                </Typography>
                                <Typography
                                    sx={{m: 2}}
                                    variant="h6"
                                >
                                    {homeContent.statement}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <Card sx={{height: '100%'}} variant='outlined'>
                            <Typography
                                component="h1"
                                sx={{m: 2}}
                                variant="h6"
                            >
                                {homeContent.introduction}
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};