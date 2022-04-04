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
import Carta  from '../mainPage/CardProducto';

function ProductPage(): JSX.Element {
  


  var str = localStorage.getItem("productoClickado")!;
  var splitted = str.split(","); 
  console.log(splitted)
  const navigate = useNavigate();
  
  return (
    <>
    <h1>{splitted[0]}</h1>
    </>
  );
}

 export default ProductPage;

