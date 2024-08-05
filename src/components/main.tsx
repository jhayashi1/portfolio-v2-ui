import { useState } from 'react';
import { Card, List, ListItemButton, ListItemText, Paper, Switch, TextField, Typography } from '@mui/material';
import { TopNav } from './TopNav';
import { routes } from '../routes';

export const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    if (!isLoading) {
        return (
            <Card sx={{flexDirection: 'column', flex: 1}} variant='outlined'>loading</Card>
        );
    }

    return (
        <Paper sx={{flex: 1, height: '100vh'}}>
            <Typography
                component="h1"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    color: 'inherit',
                    textDecoration: 'none',
                }}
                variant="h6"
                noWrap
            >
                test
            </Typography>
        </Paper>
    );
};