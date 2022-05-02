import { Pedido } from '../../shared/shareddtypes';
import React, {useEffect, useState} from "react";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {getIdPorWebId, getPedidosUsuario} from "../../api/api";
import { useSession } from "@inrupt/solid-ui-react";
import MenuBar from "../menuBar";


function ListPedidos(props:any):JSX.Element {
    const[pedidos, setPedidos] = useState<Pedido[]>([]);
    const {session} = useSession();

    const refreshPedidos = async () => {
        var userId = await getIdPorWebId(session.info.webId!);
        console.log(userId);
        setPedidos(await getPedidosUsuario(userId));
    }
    useEffect(()=>{
        refreshPedidos();
    },[]);


    return (
        <>
            <MenuBar></MenuBar>

            <h4>Estos son tus pedidos:</h4>
            <div className='pedidos'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Direccion</TableCell>
                                <TableCell align="left">Precio Total</TableCell>
                                <TableCell align="left">Estado</TableCell>
                                <TableCell align="left"></TableCell>
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
                                    <TableCell component="th" scope="row">
                                        {pedido.direccionAsignada}
                                    </TableCell>
                                    <TableCell align="left">{pedido.precioTotal}</TableCell>
                                    <TableCell align="left">{pedido.estado}</TableCell>
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

export default ListPedidos;