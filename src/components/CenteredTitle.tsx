import {Box, Divider, Typography} from '@mui/material';
import type {FC} from 'react';

export const CenteredTitle: FC<CenteredTitleProps> = ({title}: CenteredTitleProps) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Typography
                sx={{mb: 0, fontWeight: 'semibold'}}
                variant='h2'
            >
                {title}
            </Typography>
            <Divider sx={{mt: '1rem', mb: '2rem', backgroundColor: 'white', width: '7.5%'}} />
        </Box>
    );
};

interface CenteredTitleProps {
    title: string;
}
