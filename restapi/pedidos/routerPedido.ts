import express, { Router } from 'express';

import * as ControladorPedido from './ControladorPedido';

const router:Router = express.Router()

router.get('/pedido/list',
    ControladorPedido.getPedidos);
router.post('/pedido/encontrarPorUsuario',
    ControladorPedido.getPedidosByUsuario);
router.post('/pedido/crear',ControladorPedido.crearPedido);
router.post('/pedido/gastosEnvio',ControladorPedido.calcularGastosEnvio);


export default router;