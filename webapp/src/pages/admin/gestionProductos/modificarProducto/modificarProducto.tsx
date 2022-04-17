import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import logo from '../../logo.svg'
import {useNavigate} from "react-router-dom";
import AdminAppBar from '../../../menuBarAdmin';

function ModificarProducto(): JSX.Element {


  const navigate = useNavigate();

  return (
    <>
      <h1>MODIFICAR PRODUCTO</h1>

        <AdminAppBar></AdminAppBar>

        

          
    </>
  );
}

 export default ModificarProducto;

