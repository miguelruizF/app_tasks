// import React from 'react'

//Material UI Componentes
import { Link, Typography } from '@mui/material';

export const Copyright = () => {
    return (
        <>
            <Typography variant='body2' color='GrayText' align='center'>
                { 'Copryright (c)' }
                <Link color='inherit' href='https://imaginaformacion.com'>
                    Imagina Formacion 
                </Link>
                { ' ' }
                { new Date().getFullYear() }
            </Typography>
        </>
    )
}
