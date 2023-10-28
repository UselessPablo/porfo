import React from 'react';
import { Button, Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router';


const Home = () => {

    const navigate = useNavigate();

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;

        if (selectedLanguage === 'espanol') {
            navigate('/espanol');
        } else if (selectedLanguage === 'english') {
            navigate('/english');
        }
    };

    return (
       <>
       <Typography sx={{width:'100%', textAlign:'center', pt:5}}>Bienvenido</Typography>
       <div id="wrapper">
  <div className="gears" id="two-gears">
    
    <div className="gears-container">
      <div className="gear-rotate"></div>
                        <div class="gear-rotate-left"></div> 
                         
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '70%' }}>
                            <Box sx={{ pt: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <FormControl sx={{ mt: '25vh'}}>
                                    <Typography variant="h6" gutterBottom>Selecciona tu idioma</Typography>
                                    <Select
                                        labelId="idioma"
                                        onChange={handleLanguageChange}
                                        id='idioma'
                                        sx={{ width: '200px', backgroundColor: '#0f465f' }}
                                        color='primary'
                                        defaultValue='Idioma'
                                        
                                    >
                                        <MenuItem sx={{ width: '200px', backgroundColor: '#b9e1f3' }} value="espanol">Español</MenuItem>
                                        <MenuItem sx={{ width: '200px', backgroundColor: '#94bacc' }} value="english">English</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
    </div>
    
  </div>

  
</div>
        
        
        </>
    );
}

export default Home;
