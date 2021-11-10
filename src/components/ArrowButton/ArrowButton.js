import React from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useHistory } from "react-router";

const ArrowButton = () => {

    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }

    return (
        <IconButton
            size="small"
            color="inherit"
            aria-label="voltar"
            >
        <ArrowBackIosRoundedIcon onClick={goBack} />
        </IconButton>
    )
}

export default ArrowButton