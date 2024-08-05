import { useState } from 'react';
import { Card, List, ListItemButton, ListItemText, Paper, TextField } from '@mui/material';

export const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    if (!isLoading) {
        return (
            <Card sx={{flexDirection: 'column', flex: 1}} variant='outlined'>loading</Card>
        );
    }

    return (
        <Paper sx={{flex: 1, height: '100vh'}}>
            Test
        </Paper>
    );
};