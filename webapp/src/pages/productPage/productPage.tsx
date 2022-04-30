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
import MenuBar from '../menuBar';
import { borderRadius } from '@mui/system';

function ProductPage(): JSX.Element {
  

  var str = localStorage.getItem("productoClickado")!;
  var splitted = str.split(","); 
  console.log(splitted)
  const navigate = useNavigate();

  let imagen: string = splitted[3];

  return (
    <>
      <MenuBar></MenuBar>
        <h1>{splitted[0]}</h1>

      <div className='productPageContainer'>
      <table><tr>
      <td>
      <Box sx={{ flexGrow: 1 }}>
 
  <Card className='imagenProd' sx={{ maxWidth: 400, marginLeft:'50px', borderRadius:'2rem' }}>
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
 
 
   <Box sx={{marginRight:'25px'}}>  
   <Grid container spacing={1}>
    <Grid item xs={12} sx={{marginLeft:'30px'}}>          
    <Paper className="papel">
    <strong>Categoria:</strong> {splitted[2]}
    </Paper>


    </Grid>
    <Grid item xs={12} sx={{marginLeft:'30px'}}>          
    <Paper className="papel" elevation={3}>
    <strong>Descripcion: </strong> {splitted[1]}
    </Paper>
    </Grid>


    <Grid item xs={12} sx={{marginLeft:'30px'}}>          
    <Paper className="papel">
    <strong>Precio: </strong> {splitted[4]} €
    </Paper>
    </Grid>



    </Grid>

  </Box>   

  </td> </tr></table>
</div>
<br></br><br></br><br></br>

    </>

  );
}

 export default ProductPage;

