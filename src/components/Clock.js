import React from 'react'
import {useEffect, useState} from 'react';
import { Box, Typography } from '@mui/material';

const Clock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const formattedTime = time.toLocaleTimeString();


    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
       
                {formattedTime}
        
       
        </Box>
  )
}

export default Clock;