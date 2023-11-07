import React, { useState, useEffect } from 'react';
import BackButton from './BackButton';
import { Box, Button, Typography, Tooltip, Grid, Link } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Clock from './Clock';
import SignalCellular2BarIcon from '@mui/icons-material/SignalCellular2Bar';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import Battery30Icon from '@mui/icons-material/Battery30';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {orange, yellow, grey} from '@mui/material/colors';
import Date from './Date';
import { useNavigate } from 'react-router';


const theme = createTheme({
    palette: {
        primary: {
            main: orange[200],
        },
        secondary: {
            main: yellow[200],
        },
        oscuro:{
            main:orange[600],
        },
        claro: {
            main: grey[100],
        },
        secondary: {
            main: yellow[600],
        },
    },
});

const projects = [
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
    {
        title: 'Curriculum',
        imageUrl: require('../img/Curriculum.png'),
        link: 'https://uselesspablo.github.io/Curriculum-Vitae/',
    },
  
];

export const Español = () => {
   
    const iconStyle = {
        fontSize: '30px',
        color: 'black',
    };
    const iconStyleBar = {
        fontSize: '16px',
        color: 'white',
    };
    const [weatherData, setWeatherData] = useState({});
    const [showProjects, setShowProjects] = useState(false);
    const navigate = useNavigate();
   
    const toggleProjects = () => {
        setShowProjects(!showProjects);
    };
const goto = () =>{
    navigate('/contact')
}
const goSettings = ()=>{
    navigate("/settings")
}

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
                    <Box className="fondo" sx={{ pr: 2, pl: 2, width: '360px', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', pt: 0.5 }}>
                            <Typography color={'white'} variant="subtitle2"  sx={{ position: 'relative', left: '-9px', top: '-4' }}>
                                <Clock  />
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', pt: 0.5, position: 'relative', mr: '-10px' }}>
                            <NetworkWifiIcon style={iconStyleBar} sx={{ color: 'claro.main' }} />
                            <SignalCellular2BarIcon style={iconStyleBar} sx={{ color: 'claro.main' }} />
                            <Battery30Icon style={iconStyleBar} sx={{ color: 'claro.main' }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'start', mb: '55vh', mt: '9vh', color:'white' }}>
                            <Typography variant="h4" paddingTop={2}>
                                <Date />
                             <Box sx={{display:'flex', alignItems:'center'}}> 
                                {weatherData.name && (
                                    <Typography variant="subtitle2" sx={{ color: 'white' }}>
                                        {weatherData.name},
                                    </Typography>
                                )}
                                {weatherData.weather && weatherData.weather[0] && (
                                    <>
                                        <img className='clima'
                                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                                            alt="Weather Icon"
                                        />
                                        <Typography variant="subtitle2" sx={{ color: 'white' }}>
                                           {weatherData.weather[0].description}
                                        </Typography>
                               
                                    </>
                                )}
</Box> 
                            </Typography>
                        </Box>
                       
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mt: '50px' }}>
                            <Tooltip title="Galería">
                                <Button
                                    variant="contained"
                                    sx={{ borderRadius: '2rem', pt: '1', pl: '0.8rem', pr: '0', backgroundColor: 'white' }}
                                    startIcon={<CollectionsIcon style={iconStyle} />}
                                    onClick={toggleProjects}
                                />
                            </Tooltip>
                            <Tooltip title="Contacto">
                                <Button
                                    onClick={goto}
                                    variant="contained"
                                    sx={{ borderRadius: '2rem', pt: '1', pl: '0.8rem', pr: '0', backgroundColor: 'white' }}
                                    startIcon={<ContactPageIcon style={iconStyle} />}
                                />
                            </Tooltip>
                            <Tooltip title="Configuración">
                                <Button
                                    variant="contained"
                                    sx={{ borderRadius: '2rem', pt: '1', pl: '0.8rem', pr: '0', backgroundColor: 'white' }}
                                    startIcon={<SettingsIcon style={iconStyle} />}
                                    onClick={goSettings}

                                />
                            </Tooltip>
                        </Box>
                        {showProjects && (
                            <Grid container spacing={2} sx={{mt:'-25vh', zIndex:'1', position:'fixed'}}>
                                {projects.map((project, index) => (
                                    <Grid item key={index}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',ml:'30px' }}>
                                            <Link href={project.link} sx={{ color: 'claro.main', textDecoration: 'none' }} >
                                            <img className='miniaturas' src={project.imageUrl}/>
                                            <Typography variant='subtitle2'>{project.title}</Typography>      
                                      </Link>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                        <Box sx={{ display: 'flex', justifyContent: 'end', mr: '-30px' }}>
                            <BackButton />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
