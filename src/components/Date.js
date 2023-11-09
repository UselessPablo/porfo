import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

function DisplayDate() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const options = { weekday: 'long', day: 'numeric', month: 'short' };
    const formattedDate = new Intl.DateTimeFormat('es-ES', options)
        .format(currentDate)
        .replace(/^\w/, (c) => c.toUpperCase());

    return(
    <Box sx={{display:'flex'}}>
            <Typography color={'lightGreen'} fontWeight={'bold'} marginRight={'4px'}>It's: </Typography>
            <Typography>{formattedDate}</Typography>
    
        </Box>
);
}

export default DisplayDate;
