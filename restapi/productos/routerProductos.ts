import express, { Request, Response, Router } from 'express';

import * as ControladorProducto from './controladorProducto';

const router:Router = express.Router()

router.get('/products/list',
 ControladorProducto.getProductos);
router.get('/productos/activos',ControladorProducto.getProductosActivos);
router.post('/products/catalogo',ControladorProducto.getProductosPorCategoria);
router.post('/productos/delete',ControladorProducto.borrarProducto);
router.post('/productos/add',ControladorProducto.añadirProducto);
router.get('/productos/categorias',ControladorProducto.getCategorias);
router.post('/productos/reactivar',ControladorProducto.reactivarProducto);
router.post('/productos/incrementarVentas',ControladorProducto.incrementarVentasProducto);
router.post('/productos/getNVentas',ControladorProducto.getNVentas);


export default router;