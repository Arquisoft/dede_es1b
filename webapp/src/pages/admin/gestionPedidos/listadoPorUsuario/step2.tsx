import Divider from "@mui/material/Divider";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import { Input } from "antd";
import { Pedido } from '../../../../shared/shareddtypes';
import React,{useEffect, useState} from "react";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getPedidos, getPedidosPorUsuario } from '../../../../api/api';
import {useNavigate} from 'react-router-dom';
import MenuBarAdmin from "../../../menuBarAdmin";




function Step2PedidosUsuario() {
  const[pedidos, setPedidos] = useState<Pedido[]>([])

  async function cargar() {
    setPedidos(await getPedidosPorUsuario(localStorage.getItem("userIdBuscarPedido")!));
  } 
  
  useEffect( () => {
    cargar();
    
  }, [])
  
  return (
    <>
    <div className="users-container" >
            <h1>Lista de pedidos</h1>

      <div className='users'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{background:'#1E9B32'}}>
             <TableRow>
                 <TableCell>ID</TableCell>
                 <TableCell align="left">Precio total</TableCell>
                 <TableCell align="left">Dirección</TableCell>
                 <TableCell align="left">Estado</TableCell>
             </TableRow>
        </TableHead>
    <TableBody>
      {pedidos.map((pedido:Pedido) => (
        <TableRow
          key={pedido.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {pedido.id}
          </TableCell>
          <TableCell align="left">{pedido.precioTotal}</TableCell>
          <TableCell align="left">{pedido.direccionAsignada}</TableCell>
          <TableCell align="left">{pedido.estado}</TableCell>


       
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
        
     
      
      </div>
    </div>
    </>
  );
}

export default Step2PedidosUsuario;