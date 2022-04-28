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

function ListaUsuariosParaEliminar(props:any): JSX.Element {
    
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
    
      <div className="users-container" >
            <MenuBar/>
              <h1>Lista de clientes</h1>
  
        <div className='users'>
        <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Correo</TableCell>
          <TableCell align="right">ID</TableCell>
          <TableCell align="right">WEBID</TableCell>
          <TableCell align="right">NOMBRE</TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {usuarios.map((usuario:User) => (
          <TableRow
            key={usuario.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {usuario.id}
            </TableCell>
            <TableCell align="right">{usuario.webid}</TableCell>
            <TableCell align="right">{usuario.webid}</TableCell>
            <TableCell align="right">{}</TableCell>
            <TableCell align="right"> <button   type="submit" onClick={() => eliminar(usuario.id)}>Eliminar</button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
          
       
        
        </div>
      </div>
    )
        } 
export default ListaUsuariosParaEliminar;



