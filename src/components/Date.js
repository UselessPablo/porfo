import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

function DisplayDate() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(currentDate);

    return (
        <Typography>It's: {formattedDate}</Typography>
    );
}

export default DisplayDate;
