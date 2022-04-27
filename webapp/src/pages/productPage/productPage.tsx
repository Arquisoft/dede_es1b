import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import logo from '../../logo.svg'
import {useNavigate, useParams} from "react-router-dom";
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
import { getProductoPorID } from '../../api/api';

function ProductPage(): JSX.Element {
  
  const [producto,setProducto] = useState<Producto>();
  const [nombre,setNombre] = useState('');
  const [tipo,setTipo] =useState('');
  const [descripcion,setDescripcion] = useState('');
  const [precio,setPrecio] = useState('');

  const {id} = useParams();



  async function cargar() {
    let p:Producto = await getProductoPorID(id!);
    if(p!=null){
      setProducto(p);
      setNombre(p.name);
      setTipo(p.tipo);
      setDescripcion(p.descripcion);
    }
  }

  useEffect( () => {
    cargar();
  }, [])

  return (
    <>
      <MenuBar></MenuBar>
        <h1>{nombre}</h1>

      <div className='productPageContainer'>
      <table><tr>
      <td>
      <Box sx={{ flexGrow: 1 }}>
 
  <Card className='imagenProd' sx={{ maxWidth: 400, marginLeft:'50px', borderRadius:'2rem' }}>
  <CardActionArea>
    <CardMedia  
      component="img"
      height="400"
      //image={imagen}
    />
      </CardActionArea>
    </Card>
    </Box>    
    </td><td>
 
 
   <Box sx={{marginRight:'25px'}}>  
   <Grid container spacing={1}>
    <Grid item xs={12} sx={{marginLeft:'30px'}}>          
    <Paper className="papel">
    <strong>Categoria:</strong> {tipo}
    </Paper>


    </Grid>
    <Grid item xs={12} sx={{marginLeft:'30px'}}>          
    <Paper className="papel" elevation={3}>
    <strong>Descripcion: </strong> {producto?.descripcion}
    </Paper>
    </Grid>


    <Grid item xs={12} sx={{marginLeft:'30px'}}>          
    <Paper className="papel">
    <strong>Precio: </strong> {precio} €
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

