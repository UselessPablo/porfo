import React, { useState } from 'react';
import { Box, Button, Checkbox, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Clock from './Clock';
import SignalCellular2BarIcon from '@mui/icons-material/SignalCellular2Bar';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import Battery30Icon from '@mui/icons-material/Battery30';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {  grey } from '@mui/material/colors';
import { useSettings } from './utils/SettingsContext'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const lightTheme = createTheme({
    palette: {
        primary: {
            main: grey[100],
        },
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: grey[900],
        },
    },
});

const Settings = () => {
    const { isDarkMode, isLightBackground,  toggleBackground } = useSettings();
    const navigate = useNavigate();
 

    const selectedTheme = !isDarkMode ? darkTheme : lightTheme;
    const backgroundClass = isLightBackground ? 'fondoClaro' : 'fondoContact';
    const iconStyle = {
        fontSize: '16px',   
    };

    const ArrowStyle = {
        fontSize: '40px',
    };

    const BackButton = () => {
        navigate('/espanol');
    };



    return (
        <ThemeProvider theme={selectedTheme}>
           
                    <Box className={backgroundClass} sx={{ pr: 2, pl: 2, width: '100%', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', pt: 0.5 }}>
                    <Typography  color={'primary.main'} variant="subtitle2"  sx={{ position: 'relative', left: '-9px', top: '-4' }}>
                                <Clock />
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', pt: 0.5, position: 'relative', mr: '15px', height:'30px', ml:'35%' }}>
                            <NetworkWifiIcon style={iconStyle} sx={{ color: 'primary.main' }} />
                            <SignalCellular2BarIcon style={iconStyle} sx={{ color: 'primary.main' }} />
                            <Battery30Icon style={iconStyle} sx={{ color: 'primary.main' }} />
                        </Box>
                        <Box sx={{ height: '30vh' }}>
                            <Typography textAlign={'center'} variant='h4'  color={'primary.main'} sx={{ mt: '10vh'}}>
                                Configuración
                            </Typography>
                        </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: '40.4vh' }}>
                    <Typography color={'primary.main'}>Cambiar Tema</Typography>
    <LightModeIcon sx={{color:'primary.main', ml:3, mr:1}} />
                    <DarkModeIcon sx={{ color: 'primary.main' }} />
    <Checkbox checked={isLightBackground} onChange={toggleBackground} sx={{color:'primary.main', ml:2}} />      
                </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', alignContent:'end'}}>
                    <Button startIcon={<ArrowLeftIcon style={ArrowStyle} />} onClick={BackButton} sx={{ color: 'primary.main' }} />
                        </Box>
                    </Box>
          
        </ThemeProvider>
    );
};

export default Settings;
