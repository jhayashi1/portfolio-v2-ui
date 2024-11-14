import type {FC} from 'react';
import {useState} from 'react';
import {Card} from '@mui/material';
import {Introduction} from './Introduction';

export const Main: FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    if (!isLoading) {
        return (
            <Card
                sx={{flexDirection: 'column', flex: 1}}
                variant='outlined'
            >
                loading
            </Card>
        );
    }

    return (
        <Introduction />
    );
};
