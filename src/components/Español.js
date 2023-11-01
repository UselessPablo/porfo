import React from 'react'
import BackButton from './BackButton'
import { Box, Button, Typography, Tooltip, Grid} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Clock from './Clock';
import signal from '../icons/signal2.png'
import wifi from '../icons/wifi.png'
import batery from '../icons/battery.png'


export const Español = () => {
    
  
    const iconStyle = {
        fontSize: '30px',
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
             
                <Box className="fondo" sx={{  pr: 2, pl: 2, width: '360px' }}>
                    <Box sx={{display:'flex', justifyContent:'space-between', position:'absolute',pt:0.5}}>
                        <Typography color={'black'} variant='subtitle2' fontWeight={'bold'} sx={{position:'relative', left:'-9px', top:'-4'}} ><Clock/></Typography> 
                  
                   </Box>   
                    <Box sx={{display:'flex', justifyContent:'end', pt:0.5, position:'relative',mr:'-10px'}}>
                        <img src={wifi} />
                        <img src={signal} />
                        <img src={batery} />
                    </Box>
                    <Box
                        sx={{ display: 'flex', justifyContent: 'center', mb: '40vh',mt:'9vh', backgroundColor: 'transparent' }}
                    >
                        
                        <Typography variant="h4" paddingTop={10}>
                            <Clock />
                       
                        </Typography>
                 </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',mt:'50px'}}>
                        <Tooltip title="Galería">
                            <Button variant='contained' sx={{ borderRadius: '2rem', pb: '2', pt: '2', pl: '0.8rem', pr: '0', backgroundColor: 'grey' }} startIcon={<CollectionsIcon style={iconStyle} />} />
                        </Tooltip>
                        <Tooltip title="Contacto">
                            <Button variant='contained' sx={{ borderRadius: '2rem', pt: '1', pl: '0.8rem', pr: '0', backgroundColor: 'grey' }} startIcon={<ContactPageIcon style={iconStyle} />} />
                        </Tooltip>
                        <Tooltip title="Configuración">
                            <Button variant='contained' sx={{ borderRadius: '2rem', pt: '1', pl: '0.8rem', pr: '0', backgroundColor:'grey' }} startIcon={<SettingsIcon style={iconStyle} />} />
                        </Tooltip>
                   
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'end', mr:'-30px' }}>
                        <BackButton />
                    </Box>
                    </Box>
            </Grid>
        </Grid>
    );
};