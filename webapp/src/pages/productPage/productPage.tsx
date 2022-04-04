import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import logo from '../../logo.svg'
import {useNavigate} from "react-router-dom";
import Productos from '../../components/Productos';
import { Producto } from '../../shared/shareddtypes';
import { useEffect } from 'react';
import Carta  from '../mainPage/CardProducto';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './productPage.css';
import Paper from '@mui/material/Paper';

function ProductPage(): JSX.Element {
  

  var str = localStorage.getItem("productoClickado")!;
  var splitted = str.split(","); 
  console.log(splitted)
  const navigate = useNavigate();

  let imagen: string = require("../../images/" + splitted[4]);

  return (
    <>
        <h1>{splitted[1]}</h1>

<div className='productPageContainer'>
<table><tr>
  <td>
<Box sx={{ flexGrow: 1 }}>
 
    <Card sx={{ maxWidth: 400, marginLeft:'50px' }}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="400"
      image={imagen}
    />
  </CardActionArea>
  </Card>
</Box>    

</td><td>
  <Box>
   <Grid container spacing={1}>
    <Grid item xs={12} sx={{marginLeft:'30px'}}>          
    <Paper>
    Categoria: {splitted[3]}
    </Paper>

    </Grid>
    <Grid item xs={12} sx={{marginLeft:'30px'}}>          
    <Paper>
    Descripcion: {splitted[2]}
    </Paper>

    </Grid>

    <Grid item xs={12} sx={{marginLeft:'30px'}}>          
    <Paper>
    Precio: {splitted[5]}
    </Paper>

    </Grid>
    </Grid>

  </Box>   

  </td> </tr></table>
</div>
    </>

  );
}

 export default ProductPage;

