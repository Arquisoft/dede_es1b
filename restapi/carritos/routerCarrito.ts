import express, { Request, Response, Router } from 'express';

import * as ControladorProducto from './ControladorCarrito';
import {modeloCarrito} from "./ModelCarrito";

const router:Router = express.Router()

router.get('/carrito/list',
 ControladorProducto.getCarrito);
router.post('/carrito/añadirProducto',
    ControladorProducto.añadirProductoCarrito);
router.post('carrito/crear',ControladorProducto.crearCarrito);


export default router;