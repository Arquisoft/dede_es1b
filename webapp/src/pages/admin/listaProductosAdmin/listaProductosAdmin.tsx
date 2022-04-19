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
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { emitKeypressEvents } from 'readline';

function ListaProductosParaEliminar(props:any): JSX.Element {
    
    const[productos, setProductos] = useState<Producto[]>([])
    const navigate = useNavigate();

    const eliminar=(id:String)=>{
      
      deleteProduct(id);
      window.location.replace('');
    }

    const printearEstado=(estado:Boolean)=>{
      if(estado)
      return 'Activo';
      else return 'No activo';

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
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Descripcion</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">N ventas</TableCell>
            <TableCell align="right">Ganancias</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.map((producto:Producto) => (
            <TableRow
              key={producto.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {producto.name}
              </TableCell>
              <TableCell align="right">{printearEstado(producto.estado)}</TableCell>
              <TableCell align="right">{producto.descripcion}</TableCell>
              <TableCell align="right">{producto.tipo}</TableCell>
              <TableCell align="right">{producto.nventas}</TableCell>
              <TableCell align="right">{producto.nventas*producto.precio}</TableCell>
              <TableCell align="right"> <button   type="submit" onClick={() => eliminar(producto.id)}>Eliminar</button></TableCell>
              <TableCell align="right"> <button   type="submit" onClick={() => reactivar(producto.id)}>Reactivar</button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
         
          
          </div>
        </div>
      )
          } 
export default ListaProductosParaEliminar;



