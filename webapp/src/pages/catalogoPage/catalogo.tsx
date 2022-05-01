import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./catalogo.css"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import {addUser} from '../../api/api';
import Box from '@mui/material/Box';
import logo from '../../logo.svg'
import {useNavigate} from "react-router-dom";
import CategoriaRopa from "../../images/camiseta.png";
import CategoriaComida from "../../images/fabadaIcono.png";
import MenuBar from "../menuBar";
import "./catalogo.css";
import CategoriaAdornos from "../../images/horreo.png";
import Divider from '@mui/material/Divider';
import CatalogoListado from "../productosPorCategoria/productosPorCategoria";

function Catalogo(): JSX.Element {

  const navigate = useNavigate();

  const imgRopa = "https://res.cloudinary.com/dlix47jlq/image/upload/v1650910847/categorias/categoriaRopa_jkmzbq.png";
  const imgComida = "https://res.cloudinary.com/dlix47jlq/image/upload/v1650910839/categorias/fabadaIcono_plspt9.png";
  const imgAdorno = "https://res.cloudinary.com/dlix47jlq/image/upload/v1650910848/categorias/categoriaAdornos_b4inge.png";

  return (
    <>
    
    
    <MenuBar></MenuBar>
    <h1>CATÁLOGO</h1>
    <div className="container">
   
      <div className='content'>
      <table className="tabla-categorias">

    <tr>
    <td>

      <div className="box">
        <button className='categoryButton' onClick={() => navigate('/catalogo/ropa')} >
        <img src={imgRopa} width="250" height="250" alt="logo" /> 
        <Divider className='divider' style={{ background: 'black' }}/>
        <span className='categorySpan'>ROPA</span>
        </button>
    </div>
    </td>

    <td>
    <div className="box">
    <button className='categoryButton' onClick={() => navigate('/catalogo/comida')}>
    <img src={imgComida} width="250" height="250" alt="logo" /> 
    <Divider className='divider' style={{ background: 'black' }}/>
        <span className='categorySpan'>COMIDA</span>

        </button>
    </div>
    </td>

    <td>
    <div className="box">
    <button className='categoryButton' onClick={() => navigate('/catalogo/recuerdo')}>
    <img src={imgAdorno} width="250" height="250" alt="logo" /> 
    <Divider className='divider' style={{ background: 'black' }}/>
        <span className='categorySpan'>SOUVENIRS</span>
        </button>
    </div>
    </td>

    </tr>
    </table>
    </div>

    </div>
      
    </>
  );
}


 export default Catalogo;

