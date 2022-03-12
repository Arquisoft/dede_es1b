import express, { Request, Response, Router } from 'express';

import * as ControladorProducto from './ControladorCarrito';

const router:Router = express.Router()

router.get('/carrito/list',
 ControladorProducto.getCarrito);


export default router;