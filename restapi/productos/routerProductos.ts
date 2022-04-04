import express, { Request, Response, Router } from 'express';

import * as ControladorProducto from './controladorProducto';

const router:Router = express.Router()

router.get('/products/list',
 ControladorProducto.getProductos);
router.post('/products/catalogo',ControladorProducto.getProductosPorCategoria);
router.post('/products/id',ControladorProducto.getProductoPorID);


export default router;