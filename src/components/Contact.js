import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Clock from './Clock';
import SignalCellular2BarIcon from '@mui/icons-material/SignalCellular2Bar';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import Battery30Icon from '@mui/icons-material/Battery30';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Date from './Date';
import {orange, yellow, grey} from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[200],
        },
        secondary: {
            main: yellow[200],
        },
        oscuro: {
            main: orange[600],
             },
                  claro: {
            main: grey[100],
        },
    },
});

const Contact = () => {
    const navigate = useNavigate();

    const iconStyle = {
        fontSize: '35px',
        color: 'white',
    };
    const ArrowStyle = {
        fontSize: '40px',
        color: 'white',
    };
    const iconStyleBar = {
        fontSize: '16px',
        color: 'white',
    };
    const github = () => {
        window.open("https://github.com/UselessPablo");
    };
    const linkedin = () => {
        window.open('https://linkedin.com/in/pablo-auterio-60a83149');
    };
    const BackButton = () => {
        navigate('/espanol');
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ height: '100%' }}
                paddingTop={4}
            >
                <Grid item>
                    <Box className="fondoContact" sx={{ pr: 2, pl: 2, width: '360px', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', pt: 0.5 }}>
                            <Typography color={'white'} variant="subtitle2"  sx={{ position: 'relative', left: '-9px', top: '-4' }}>
                                <Clock />
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', pt: 0.5, position: 'relative', mr: '-10px' }}>
                            <NetworkWifiIcon style={iconStyleBar} sx={{ color: 'claro.main' }} />
                            <SignalCellular2BarIcon style={iconStyleBar} sx={{ color: 'claro.main' }} />
                            <Battery30Icon style={iconStyleBar} sx={{ color: 'claro.main' }} />
                        </Box>
                        <Box sx={{ overflowY: 'scroll', display: 'flex', flexDirection: 'column', mb: '38vh', mt: '17vh' }}>
                            <Typography textAlign={'center'} color={'white'}>Pablo Auterio</Typography>
                            
                            <Button onClick={() => {
                                const phoneNumber = '+5492944895986';
                                const whatsappUrl = `https://wa.me/${phoneNumber}`;
                                window.open(whatsappUrl, '_blank');
                            }} startIcon={<WhatsAppIcon style={iconStyle}/>} ></Button>
                            <Button onClick={github} startIcon={<GitHubIcon style={iconStyle} />} ></Button>
                            <Button onClick={linkedin} startIcon={<LinkedInIcon style={iconStyle} />} ></Button>
                            
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'end', mr: '-30px',pb:'10px',pt:'5px' }}>
                            <Button startIcon={<ArrowLeftIcon style={ArrowStyle} />} onClick={BackButton} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Contact;
