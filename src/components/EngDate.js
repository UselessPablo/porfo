import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import format from 'date-fns/format';
import enUS from 'date-fns/locale/en-US';

function EngDate() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = format(currentDate, 'iii, MMM d', { locale: enUS });

    return (
        <Box sx={{ display: 'flex' }}>
            <Typography color={'green'} fontWeight={'bold'} marginRight={'4px'}>It's: </Typography>
            <Typography>{formattedDate}</Typography>
        </Box>
    );
}

export default EngDate;
