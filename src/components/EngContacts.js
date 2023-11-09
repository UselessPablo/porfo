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
import { useSettings } from './utils/SettingsContext'
import { orange, yellow, grey } from '@mui/material/colors';


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

const EngContact = () => {
    const navigate = useNavigate();

    const { isDarkMode, isLightBackground } = useSettings();

    const selectedTheme = isDarkMode ? darkTheme : lightTheme;
    const backgroundClass = isLightBackground ? 'fondoClaro' : 'fondoContact';

    const iconStyle = {
        fontSize: '35px',

    };
    const ArrowStyle = {
        fontSize: '40px',

    };
    const iconStyleBar = {
        fontSize: '16px',

    };
    const github = () => {
        window.open("https://github.com/UselessPablo");
    };
    const linkedin = () => {
        window.open('https://linkedin.com/in/pablo-auterio-60a83149');
    };
    const BackButton = () => {
        navigate('/english');
    };

    return (
        <ThemeProvider theme={selectedTheme}>

            <Box className={backgroundClass} sx={{ width: '100%', height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', pt: 0.5 }}>
                    <Typography color={'primary.main'} variant="subtitle2" sx={{ position: 'relative', left: '8px', top: '-4' }}>
                        <Clock />
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'end', pt: 0.5, position: 'relative', mr: '15px' }}>
                    <NetworkWifiIcon style={iconStyleBar} sx={{ color: 'primary.main' }} />
                    <SignalCellular2BarIcon style={iconStyleBar} sx={{ color: 'primary.main' }} />
                    <Battery30Icon style={iconStyleBar} sx={{ color: 'primary.main' }} />
                </Box>
                <Box sx={{ overflowY: 'scroll', display: 'flex', flexDirection: 'column', mb: '13.3vh', mt: '18vh' }}>
                    <Typography textAlign={'center'} color={'primary.main'}>Pablo Auterio</Typography>
                    <Typography textAlign={'center'} color={'primary.main'}>FrontEnd Developer</Typography>
                    <Button onClick={() => {
                        const phoneNumber = '+5492944895986';
                        const whatsappUrl = `https://wa.me/${phoneNumber}`;
                        window.open(whatsappUrl, '_blank');
                    }} startIcon={<WhatsAppIcon style={iconStyle} />} ></Button>
                    <Button onClick={github} startIcon={<GitHubIcon style={iconStyle} />} ></Button>
                    <Button onClick={linkedin} startIcon={<LinkedInIcon style={iconStyle} />} ></Button>
                    <Typography textAlign={'center'} color={'primary.main'}> React Js</Typography>
                    <Typography textAlign={'center'} color={'primary.main'}> HTML</Typography>
                    <Typography textAlign={'center'} color={'primary.main'}> CSS</Typography>
                    <Typography textAlign={'center'} color={'primary.main'}> JavaScript</Typography>
                    <Typography textAlign={'center'} color={'primary.main'}> Git</Typography>
                    <Typography textAlign={'center'} color={'primary.main'}> SEO</Typography>
                    <Typography textAlign={'center'} color={'primary.main'}> MUI Js </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'end', alignContent: 'flex-end' }}>
                    <Button startIcon={<ArrowLeftIcon style={ArrowStyle} />} onClick={BackButton} />
                </Box>
            </Box>

        </ThemeProvider>
    );
};

export default EngContact;
