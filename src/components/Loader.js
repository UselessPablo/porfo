import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Loader =()=> {
    return (
        <Box sx={{ display: 'flex', justifyContent:'center', pt:'40vh', flexDirection:'column', alignItems:'center'}}>
           
            <CircularProgress size={60} />
            <Typography sx={{pt:5}}>Loading...</Typography>
            <Typography sx={{ pt: 2 }}>Cargando...</Typography>
        </Box>
    );
}
export default Loader; 