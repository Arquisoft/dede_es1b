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


function Step2(props:any) {
  const[pedidos, setPedidos] = useState<Pedido[]>([])

  async function cargar() {
    setPedidos(await getPedidosPorUsuario(localStorage.getItem("userIdBuscarPedido")!));
  } 
  
  useEffect( () => {
    cargar();
  }, [])
  
  const navigate = useNavigate();

  return (
     <>
       <h4>{localStorage.getItem('userIdBuscarPedido')}</h4>
       {pedidos.map((pedido:Pedido) => (
            <h2>Pedidooo {pedido.id}</h2>
          ))}
          <div className='pedidos'>
      <Divider color='black'></Divider><br></br>
      <button className="añadirProdButton" data-testid="prev" onClick={props.prev}>
				Prev
			</button>
			<button className="añadirProdButton" data-testid="next" onClick={()=>navigate("/gestionPedidos")}>
				Finalizar
			</button>
    </div>
    </>
  );
}

export default Step2;