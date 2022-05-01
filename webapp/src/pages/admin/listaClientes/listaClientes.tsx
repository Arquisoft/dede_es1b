import { useEffect, useState } from 'react';
import { User } from '../../../shared/shareddtypes';
import MenuBar from "../../menuBarAdmin";
import {useNavigate} from 'react-router-dom';
import { getNameFromPod, getUsers } from '../../../api/api';
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

/*     const eliminar=(id:String)=>{
      deleteUser(id);
      window.location.replace('');

    }
 */
    const printearEstado=(estado:Boolean)=>{
      if(estado)
      return 'Activo';
      else return 'No activo';

    }

/*     const reactivar=(id:String)=>{
      reactivarUsuario(id);
      window.location.replace('');

    } */

    const nombreUsuario = async (webid:string) =>{
      return await getNameFromPod(webid);
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
            <TableCell>ID</TableCell>
            <TableCell align="right">WebID</TableCell>
            <TableCell align="right">Número pedidos</TableCell>
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
              <TableCell align="right">{1}</TableCell>
           
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