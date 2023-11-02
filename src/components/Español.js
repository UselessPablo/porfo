import React, { useState } from 'react';
import BackButton from './BackButton';
import { Box, Button, Typography, Tooltip, Grid, Link } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Clock from './Clock';
import signal from '../icons/signal2.png';
import wifi from '../icons/wifi.png';
import batery from '../icons/battery.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, yellow } from '@mui/material/colors';
import Date from './Date';


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
    // Agrega más proyectos aquí
];

export const Español = () => {
    const iconStyle = {
        fontSize: '30px',
        color: 'black',
    };

    const [showProjects, setShowProjects] = useState(false);

    const toggleProjects = () => {
        setShowProjects(!showProjects);
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
                    <Box className="fondo" sx={{ pr: 2, pl: 2, width: '360px', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', pt: 0.5 }}>
                            <Typography color={'black'} variant="subtitle2" fontWeight={'bold'} sx={{ position: 'relative', left: '-9px', top: '-4' }}>
                                <Clock />
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'end', pt: 0.5, position: 'relative', mr: '-10px' }}>
                            <img src={wifi} />
                            <img src={signal} />
                            <img src={batery} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'start', mb: '60vh', mt: '9vh', backgroundColor: 'transparent' }}>
                            <Typography variant="h4" paddingTop={2}>
                                <Date />
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mt: '50px' }}>
                            <Tooltip title="Galería">
                                <Button
                                    variant="contained"
                                    sx={{ borderRadius: '2rem', pt: '1', pl: '0.8rem', pr: '0', backgroundColor: 'secondary.main' }}
                                    startIcon={<CollectionsIcon style={iconStyle} />}
                                    onClick={toggleProjects}
                                />
                            </Tooltip>
                            <Tooltip title="Contacto">
                                <Button
                                    variant="contained"
                                    sx={{ borderRadius: '2rem', pt: '1', pl: '0.8rem', pr: '0', backgroundColor: 'secondary.main' }}
                                    startIcon={<ContactPageIcon style={iconStyle} />}
                                />
                            </Tooltip>
                            <Tooltip title="Configuración">
                                <Button
                                    variant="contained"
                                    sx={{ borderRadius: '2rem', pt: '1', pl: '0.8rem', pr: '0', backgroundColor: 'secondary.main' }}
                                    startIcon={<SettingsIcon style={iconStyle} />}
                                />
                            </Tooltip>
                        </Box>
                        {showProjects && (
                            <Grid container spacing={2} sx={{mt:'-20vh', zIndex:'1', position:'absolute'}}>
                                {projects.map((project, index) => (
                                    <Grid item key={index}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',ml:'30px' }}>
                                        <Link href={project.link} sx={{ color: 'oscuro.main' }} >
                        
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
