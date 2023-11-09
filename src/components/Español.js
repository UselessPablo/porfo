import React, { useState, useEffect } from 'react';
import BackButton from './BackButton';
import { Box, Button, Typography, Tooltip, Grid, Link, Drawer, List, ListItem, ListItemText } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Clock from './Clock';
import SignalCellular2BarIcon from '@mui/icons-material/SignalCellular2Bar';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import Battery30Icon from '@mui/icons-material/Battery30';
import GoogleIcon from '@mui/icons-material/Google';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, green} from '@mui/material/colors';
import Date from './Date';
import { useNavigate } from 'react-router';
import { useSettings } from './utils/SettingsContext'


const lightTheme = createTheme({
    palette: {
        primary: {
            main: grey[900],
        },
        secondary: {
            main: green[200],
        },
        google:{
            main:green[200],
        },
        icons:{
            main:green[100],
        },
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: grey[100],
        },
        secondary: {
            main: grey[900],
        },
        google: {
            main: grey[900]
        },
        icons: {
            main: grey[100],
        },
    },
});

const projects = [
    {
        title: 'Curriculum',
        imageUrl: require('../img/Curriculum.png'),
        link: 'https://uselesspablo.github.io/Curriculum-Vitae/',
    },
    {
        title: 'HumaBrc',
        imageUrl: require('../img/Captura de pantalla 2023-11-02 152653.png'),
        link: 'https://uselesspablo.github.io/React/',
    },
    {
        title: 'Tu Servicio',
        imageUrl: require('../img/servicio.png'),
        link: 'https://uselesspablo.github.io/TuServicio/',
    },
  
];

export const Español = () => {
   
    const iconStyle = {
        fontSize: '30px',
      color:'black'
    };
    const iconStyleBar = {
        fontSize: '16px',
      
    };
    const [weatherData, setWeatherData] = useState({});
    const [showProjects, setShowProjects] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const { isDarkMode, isLightBackground } = useSettings();

    const selectedTheme = isDarkMode ? darkTheme : lightTheme;
    const backgroundClass = isLightBackground ? 'fondoClaro' : 'fondoContact';

    const toggleProjects = () => {
        setShowProjects(!showProjects);
    };
const goto = () =>{
    navigate('/contact')
}
const goSettings = ()=>{
    navigate("/settings")
}
    const openDrawer = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    const getWeatherData = async () => {
        try {
            const response = await fetch(
                ` https://api.openweathermap.org/data/2.5/weather?lat=-40.7128&lon=-74.0060&exclude=minutely&appid=d73778e8cc05f1432905b0cc8acc2a7b`
            
            );
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                console.error('Error al obtener datos del clima');
            }
        } catch (error) {
            console.error('Error al obtener datos del clima', error);
        }
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    getWeatherData(latitude, longitude);
                },
                (error) => {
                    console.error('Error al obtener coordenadas de geolocalización:', error);
                }
            );
        } else {
            console.error('Geolocalización no está disponible en este navegador.');
        }
    }, []);
    console.log(weatherData);
    
    return (
        <ThemeProvider theme={selectedTheme}>
        
            <Box className={backgroundClass} sx={{ pr: 2, pl: 2, width:'100%', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', pt: 0.5 }}>
                    <Typography  color={'primary.main'} variant="subtitle2" sx={{ position: 'relative', left: '-9px', top: '-4' }}>
                                <Clock />
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', pt: 0.5, position: 'relative', mr: '15px' }}>
                            <NetworkWifiIcon style={iconStyleBar} sx={{ color: 'primary.main' }} />
                            <SignalCellular2BarIcon style={iconStyleBar} sx={{ color: 'primary.main' }} />
                            <Battery30Icon style={iconStyleBar} sx={{ color: 'primary.main' }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'start', mb: '55vh', mt: '9vh', color: 'white' }}>
                    <Typography  variant="h4" paddingTop={2} color={'primary.main'}>
                                <Date />
                                <Box sx={{ display: 'flex', alignItems: 'center', position:'absolute' }}>
                                    {weatherData.name && (
                                        <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
                                            {weatherData.name},
                                        </Typography>
                                    )}
                                    {weatherData.weather && weatherData.weather[0] && (
                                        <>
                                            <img
                                                className="clima"
                                                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                                                alt="Weather Icon"
                                            />
                                            <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
                                                {weatherData.weather[0].description}
                                            </Typography>
                                        </>
                                    )}
                                </Box>
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',  }}>
                            <Tooltip title="Galería">
                                <Button
                                    variant="contained"
                            sx={{ borderRadius: '2rem', pt: '1', pl: '0.8rem', pr: '0', backgroundColor: 'icons.main' }}
                                    startIcon={<CollectionsIcon style={iconStyle} />}
                                    onClick={openDrawer}
                                />
                            </Tooltip>
                            <Tooltip title="Contacto">
                                <Button
                                    onClick={goto}
                                    variant="contained"
                            sx={{ borderRadius: '2rem', pt: '1', pl: '0.8rem', pr: '0', backgroundColor: 'icons.main' }}
                                    startIcon={<ContactPageIcon style={iconStyle} />}
                                />
                            </Tooltip>
                            <Tooltip title="Configuración">
                                <Button
                                    variant="contained"
                                    sx={{ borderRadius: '2rem', pt: '1', pl: '0.8rem', pr: '0', backgroundColor: 'icons.main' }}
                                    startIcon={<SettingsIcon style={iconStyle} />}
                                    onClick={goSettings}
                                />
                            </Tooltip>
                        </Box>

                <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawer} PaperProps={{ sx: { backgroundColor: selectedTheme.palette.secondary.main, color: selectedTheme.palette.primary.main } }}>
                   <Typography textAlign={'center'} sx={{mt:4}}>Proyectos</Typography>
                    <Typography textAlign={'center'} sx={{ mt: 1}}>Pablo A.</Typography>
                    <List >
                                {projects.map((project, index) => (
                                    <ListItem key={index} sx={{ mb:5, mt:6, textAlign:'center', flexDirection:'column', alignItems:'center'}}>
                                        <Link href={project.link} sx={{ textDecoration: 'none', color:'primary.main' }}>
                                            <img className="miniaturas" src={project.imageUrl} alt={project.title} />
                                            <ListItemText primary={project.title} />
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                <Link href="https://www.google.com" sx={{ textDecoration: 'none' }}>
<Box sx={{ display:'flex', justifyContent:'space-between', borderRadius:'4rem', height:'42px', backgroundColor:'google.main', mt:4,mr:3, alignItems:'center'}}>
                    
<GoogleIcon sx={{ml:2}} />
<SearchIcon sx={{mr:2}}/>

</Box>
                </Link>
                        <Box sx={{ display: 'flex', justifyContent: 'end',alignContent:'flex-end'}}>
                            <BackButton sx={{color:'primary.main'}} />
                        </Box>
                    </Box>
              
        </ThemeProvider>
    );
                                };
