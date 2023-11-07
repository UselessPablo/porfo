import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Clock from './Clock';
import SignalCellular2BarIcon from '@mui/icons-material/SignalCellular2Bar';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import Battery30Icon from '@mui/icons-material/Battery30';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange, yellow, grey } from '@mui/material/colors';
import { useSettings } from './utils/SettingsContext'

const lightTheme = createTheme({
    palette: {
        primary: {
            main: grey[900],
        },
        secondary: {
            main: yellow[200],
        },
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: grey[100],
        },
        secondary: {
            main: yellow[600],
        },
    },
});

const Settings = () => {
   
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(true); 
    const [isLightBackground, setIsLightBackground] = useState(false); 

    const iconStyle = {
        fontSize: '16px',
       
    };

    const ArrowStyle = {
        fontSize: '40px',
        color: 'white',
    };

    const BackButton = () => {
        navigate('/espanol');
    };


    const toggleBackground = () => {
        setIsLightBackground(!isLightBackground);
        setIsDarkMode(!isDarkMode)
    };

    const selectedTheme = isDarkMode ? darkTheme : lightTheme;
    const backgroundClass = isLightBackground ? 'fondoClaro' : 'fondoContact';


    return (
        <ThemeProvider theme={selectedTheme}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ height: '100%' }}
                paddingTop={4}
            >
                <Grid item>
                    <Box className={backgroundClass} sx={{ pr: 2, pl: 2, width: '360px', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', pt: 0.5 }}>
                            <Typography color={'primary.main'} variant="subtitle2" fontWeight={'bold'} sx={{ position: 'relative', left: '-9px', top: '-4' }}>
                                <Clock />
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', pt: 0.5, position: 'relative', mr: '-10px' }}>
                            <NetworkWifiIcon style={iconStyle} sx={{ color: 'primary.main' }} />
                            <SignalCellular2BarIcon style={iconStyle} sx={{ color: 'primary.main' }} />
                            <Battery30Icon style={iconStyle} sx={{ color: 'primary.main' }} />
                        </Box>
                        <Box sx={{ height: '70vh' }}>
                            <Typography textAlign={'center'} color={'primary.main'} sx={{ mt: '10vh' }}>
                                Configuración
                            </Typography>
                        </Box>

                        <Button onClick={toggleBackground}  variant="contained" color="primary" sx={{ mt: 2 }}>
                            Cambiar Fondo
                        </Button>

                        <Box sx={{ display: 'flex', justifyContent: 'end', mr: '-30px', pb: '10px', pt: '5px' }}>
                            <Button startIcon={<ArrowLeftIcon style={ArrowStyle} />} onClick={BackButton} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Settings;
