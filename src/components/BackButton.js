import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Button, Tooltip} from '@mui/material';

function BackButton() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/'); 
    };
    const iconStyle = {
        fontSize: '40px', 
       
    };

    return (
       <Tooltip title='Back'>
       <Button onClick={goBack} startIcon={<ArrowLeftIcon style={iconStyle} />}></Button>
        </Tooltip>
  );
}

export default BackButton;




