import Divider from "@mui/material/Divider";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import { Input } from "antd";
import { Pedido } from '../../shared/shareddtypes';
import React, {useEffect, useState} from "react";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {getPedidosUsuario, getUsers} from "../../api/api";


function listPedidos(props:any):JSX.Element {
    const[pedidos, setPedidos] = useState<Pedido[]>([]);
    const refreshPedidos = async () => {
        setPedidos(await getPedidosUsuario("cl123"));
    }
    useEffect(()=>{
        refreshPedidos();
    },[]);
    return (
        <>
            <h4>Estos son tus pedidos:</h4>

            <div className='pedidos'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Correo</TableCell>
                                <TableCell align="right">Id</TableCell>
                                <TableCell align="right">Direccion</TableCell>
                                <TableCell align="right">Precio Total</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pedidos.map((pedido:Pedido) => (
                                <TableRow
                                    key={pedido.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {pedido.direccionAsignada}
                                    </TableCell>
                                    <TableCell align="right">{pedido.precioTotal}</TableCell>
                                    <TableCell align="right">{pedido.estado}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div><div>

        </div>
        </>
    );
}

export default listPedidos;