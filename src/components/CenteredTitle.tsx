import type {FC} from 'react';

import {Box, Divider, Typography} from '@mui/material';

export const CenteredTitle: FC<CenteredTitleProps> = ({title}) => {
    return (
        <Box sx={{alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography
                sx={{fontWeight: 'semibold', mb: 0}}
                variant='h2'
            >
                {title}
            </Typography>
            <Divider sx={{backgroundColor: 'white', mb: 8, mt: 4, width: '7.5%'}} />
        </Box>
    );
};

interface CenteredTitleProps {
    title: string;
}
