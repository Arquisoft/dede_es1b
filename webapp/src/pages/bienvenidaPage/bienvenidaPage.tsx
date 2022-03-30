import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./bienvenidaPage.css"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import {addUser} from '../../api/api';
import Box from '@mui/material/Box';
import logo from '../../logo.svg'
import {useNavigate} from "react-router-dom";


function Bienvenida(): JSX.Element {


  const navigate = useNavigate();


  return (
    <>

          <h1>Bienvenido a AsturShop</h1>

          <br></br> <br></br> <br></br> <br></br> <br></br>

         <a className="boton"  onClick={() => navigate("/inicio")}  >Empezar</a
         >
     
    </>
  );
}

 export default Bienvenida;

