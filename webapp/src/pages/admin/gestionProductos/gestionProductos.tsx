import { useEffect, useState } from 'react';
import { User } from '../../../shared/shareddtypes';
import MenuBar from "../../menuBarAdmin";
import {useNavigate} from 'react-router-dom';
import { getUsers } from '../../../api/api';
import { deleteUser } from '../../../api/api';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AdminAppBar from '../../menuBarAdmin';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './gestionProductos.css';

function GestionProductos(props:any): JSX.Element {
    
    const[usuarios, setUsuarios] = useState<User[]>([])
    const navigate = useNavigate();

    const eliminar=(id:String)=>{
      deleteUser(id);
      window.location.replace('');

    }
  
    async function cargar() {
        setUsuarios(await getUsers());
      }
    
      useEffect( () => {
        cargar();
      }, [])

      return (

            <><AdminAppBar></AdminAppBar>
            <div className="botones">
                <div className='contenido'>
                <button className="button-48" role="button"><span className="text">
                    <strong>Añadir producto</strong>
                </span></button>


                <button className="button-48" role="button"><span className="text">
                    <strong>Modificar producto</strong>
                </span></button>


                <button className="button-48" role="button"><span className="text">
                    <strong>Añadir / modificar categoria</strong>
                </span></button>
                </div>
             </div>
            </>
 
        );
    } 
export default GestionProductos;



