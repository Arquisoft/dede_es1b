import { useEffect, useState } from 'react';
import { Producto, User } from '../../../shared/shareddtypes';
import MenuBar from "../../menuBarAdmin";
import {useNavigate} from 'react-router-dom';
import { getProductos, getUsers } from '../../../api/api';
import { deleteProduct } from '../../../api/api';
import { reactivarProducto,getNVentas } from '../../../api/api';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
//import EstadisticasProducto from './ventanaEstadisticas/estadisticasProducto';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { emitKeypressEvents } from 'readline';
import DoneIcon from '@mui/icons-material/Done';
import CachedIcon from '@mui/icons-material/Cached';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
function ListaProductosAdmin(props:any): JSX.Element {
    
    const[productos, setProductos] = useState<Producto[]>([])
    const navigate = useNavigate();

    const eliminar=(id:String)=>{
      
      deleteProduct(id);
      window.location.replace('');
    }

    const printearEstado=(estado:Boolean)=>{
      if(estado)
      return 'En venta';
      else return 'Descatalogado';

    }

    const reactivar=(id:String)=>{
      
      reactivarProducto(id);
      window.location.replace('');
    }

    async function cargar() {
        setProductos(await getProductos());
      }
    
      useEffect( () => {
        cargar();
      }, [])

      return (
      
        <div className="users-container" >
              <MenuBar/>
                <h1>Lista de productos</h1>
    
          <div className='users'>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{background:'#1E9B32'}}>
          <TableRow>
          <TableCell align="left">ID</TableCell>
            <TableCell align="left">NOMBRE</TableCell>
            <TableCell align="left">ESTADO</TableCell>
            <TableCell align="center">DETALLES</TableCell>
            <TableCell align="center">ELIMINAR</TableCell>
            <TableCell align="center">REACTIVAR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.map((producto:Producto) => (
            <TableRow
              key={producto.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {producto.id}
              </TableCell>
              <TableCell align="left">{producto.name}</TableCell>
              <TableCell align="left">{printearEstado(producto.estado)}</TableCell>
              <TableCell align="center"> <button   type="submit" onClick={() =>{
                 let productoString = producto.name+'-'+producto.descripcion+'-'
                 + producto.tipo+'-'+producto.imagen+'-'+producto.precio;
                localStorage.setItem("productoClickado",productoString);
                navigate('/detallesProducto')}
                } >Ver</button></TableCell>
              <TableCell align="center"> <button   type="submit" onClick={() =>eliminar(producto.id)} ><HighlightOffIcon></HighlightOffIcon></button></TableCell>
              <TableCell align="center"> <button   type="submit" onClick={() => reactivar(producto.id)}><CachedIcon></CachedIcon></button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
         
          
          </div>
        </div>
      )
          } 
export default ListaProductosAdmin;