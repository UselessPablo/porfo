import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Button} from '@mui/material';

function BackButton() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/'); 
    };
    const iconStyle = {
        fontSize: '40px', 
        color:'black'
    };

    return (
        <Button onClick={goBack} startIcon={<ArrowLeftIcon style={iconStyle} />}>
          
        </Button>
    );
}

export default BackButton;




