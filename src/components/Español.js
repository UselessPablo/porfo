import React from 'react'
import BackButton from './BackButton'
import { Box, Button, Typography, Tooltip, Grid } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Clock from './Clock';

export const Español = () => {
    
  
    const iconStyle = {
        fontSize: '40px',
        color: 'black'
    };
  
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ height: '100vh' }}
        >
           
            <Grid item>
             
                <Box className="fondo" sx={{ pb: 5, pt: 5, pr: 3, pl: 3, width: '360px' }}>
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Typography color={'black'} variant='subtitle2' fontWeight={'bold'} sx={{position:'relative', left:'-6px'}} ><Clock/></Typography> 
                   </Box>   
                   
                    <Box
                        sx={{ display: 'flex', justifyContent: 'center', mb: '40vh',mt:'9vh', backgroundColor: 'transparent' }}
                    >
                        
                        <Typography variant="h4" paddingTop={10}>
                            <Clock />
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <BackButton />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',mt:'50px'}}>
                        <Tooltip title="Galería">
                            <Button startIcon={<CollectionsIcon style={iconStyle} />} />
                        </Tooltip>
                        <Tooltip title="Contacto">
                            <Button startIcon={<ContactPageIcon style={iconStyle} />} />
                        </Tooltip>
                        <Tooltip title="Configuración">
                            <Button startIcon={<SettingsIcon style={iconStyle} />} />
                        </Tooltip>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};