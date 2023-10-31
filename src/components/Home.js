import React from 'react';
import { Button, Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Loader from './Loader';

const Home = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLoading(true);
        
        setTimeout(() => {

        if (selectedLanguage === 'espanol') {
            navigate('/espanol');
           
        } else if (selectedLanguage === 'english') {
            navigate('/english');
        }
        
        }, 2000);
   
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Typography variant='h4' sx={{ width: '380px', textAlign: 'center', pt: 5}}>Set up</Typography>
                    <div id="wrapper">
                        <div className="gears" id="two-gears">
                            <div className="gears-container">
                                <div className="gear-rotate"></div>
                                <div class="gear-rotate-left"></div>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '68%'}}>
                                    <Box sx={{ pt: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                        <FormControl sx={{ mt: '25vh', width:'100%' }}>
                                                <Typography sx={{ textAlign: 'center' }} variant="subtitle2" gutterBottom>Selecciona tu idioma</Typography>
                                                <Typography sx={{textAlign:'center',mb:2}} variant="subtitle2" gutterBottom>Choose your language</Typography>
                                            <Select
                                                labelId="idioma"
                                                onChange={handleLanguageChange}
                                                id='idioma'
                                                sx={{ width: '200px', backgroundColor: '#daeeff' }}
                                                    color= 'grey'
                                                defaultValue='Idioma'
                                            >
                                                <MenuItem sx={{ width: '200px', justifyContent: 'center' }} value="espanol">Español</MenuItem>
                                                <MenuItem sx={{ width: '200px', justifyContent: 'center' }} value="english">English</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Box>
    );
}

export default Home;
