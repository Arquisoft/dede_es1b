import express, { Router } from 'express';

import * as ControladorProducto from './ControladorCarrito';

const router:Router = express.Router()

router.get('/carrito/list',
 ControladorProducto.getCarrito);
router.post('/carrito/añadirProducto',
    ControladorProducto.añadirProductoCarrito);
router.post('carrito/crear',ControladorProducto.crearCarrito);


export default router;