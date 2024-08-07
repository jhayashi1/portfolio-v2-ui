import { Box, Divider, Typography } from '@mui/material';

export const CenteredTitle = ({ title }: CenteredTitleProps) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
                sx={{ mb: 0 }}
                variant='h2'
            >
                {title}
            </Typography>
            <Divider sx={{ mt: '1rem', mb: '2rem', backgroundColor: 'white', width: '10%' }} />
        </Box>
    );
};

interface CenteredTitleProps {
    title: string;
}
