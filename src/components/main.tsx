import { useState } from 'react';
import { Card, Paper } from '@mui/material';
import { content } from '../constants';
import { Introduction } from './Introduction';

export const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    if (!isLoading) {
        return (
            <Card
                sx={{flexDirection: 'column', flex: 1}}
                variant='outlined'
            >loading</Card>
        );
    }

    return (
        <Paper sx={{borderRadius: 0, flex: 1, height: '100vh'}}>
            <Introduction />
        </Paper>
    );
};