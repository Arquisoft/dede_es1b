import express, { Request, Response, Router } from 'express';

import * as ControladorPedido from './ControladorPedido';
import {modeloPedido} from "./ModelPedido";

const router:Router = express.Router()

router.get('/carrito/list',
 ControladorProducto.getCarrito);
router.post('/pedido/encontrarPorUsuario',
    ControladorPedido.getPedidosByUsuario);
router.post('pedido/crear',ControladorPedido.crearPedido);


export default router;