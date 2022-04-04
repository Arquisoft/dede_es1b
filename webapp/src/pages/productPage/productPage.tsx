import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import logo from '../../logo.svg'
import {useNavigate} from "react-router-dom";
import Productos from '../../components/Productos';
import { getProductoPorID } from '../../api/api';
import { Producto } from '../../shared/shareddtypes';
import { useEffect } from 'react';
import { Carta } from '../mainPage/CardProducto';

function ProductPage(): JSX.Element {
  
  const[producto, setProducto] = useState<Producto>()
  let prodId= localStorage.getItem("productoClickado");


  async function cargar() {
    if(prodId!=null)
     setProducto(await getProductoPorID(parseInt(prodId)));
  }

  useEffect( () => {
    cargar();
  })

  const navigate = useNavigate();

  return (
    <>

     
    </>
  );
}

 export default ProductPage;

