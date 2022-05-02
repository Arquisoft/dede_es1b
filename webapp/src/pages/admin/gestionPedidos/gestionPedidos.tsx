import { useEffect, useState } from 'react';
import { User } from '../../../shared/shareddtypes';
import MenuBar from "../../menuBarAdmin";
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
import {useNavigate} from 'react-router-dom';

function GestionPedidos(props:any): JSX.Element {
    
    const navigate = useNavigate();
    

      return (

            <><AdminAppBar></AdminAppBar>
            <h1>GESTIÓN PEDIDOS</h1>

                <table className="tablaBotones">
                <tr>
                <button className="button-48"   onClick={() => navigate("/gestionPedidos/listado")}><span className="text">
                    <strong>Listado</strong>
                </span></button>
                </tr>

                <tr>
                <button className="button-48"  onClick={() => navigate("/gestionPedidos/listadoPorUsuario")}><span className="text">
                    <strong>Pedidos por usuario</strong>
                </span></button>
                </tr>

             
                </table>

            </>
 
        );
    } 
export default GestionPedidos;