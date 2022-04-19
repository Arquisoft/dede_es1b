import Divider from "@mui/material/Divider";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import { Input } from "antd";
import { Pedido } from '../../../shared/shareddtypes';
import React,{useEffect, useState} from "react";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getPedidos } from '../../../api/api';


function Step2(props:any) {
  const[pedidos, setPedidos] = useState<Pedido[]>([])

  let id:String = '625c2ea4bf758537a0797b24';
  async function cargar() {
    setPedidos(await getPedidos());
  } 
  
  useEffect( () => {
    cargar();
  }, [])
  
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
			<button className="añadirProdButton" data-testid="next" onClick={props.next}>
				Next
			</button>
    </div>
    </>
  );
}

export default Step2;