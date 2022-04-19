import express, { Request, Response, Router } from 'express';

import * as ControladorUsuario from './ControladorUsuario';

const router:Router = express.Router()

router.get('/Usuarios/list',
 ControladorUsuario.getUsuarios);
router.post('/usuarios/login',ControladorUsuario.checkUsuario);
router.post('/usuarios/reactivar',ControladorUsuario.reactivarUsuario);
router.post('/usuarios/add',ControladorUsuario.añadirUsuario);
router.post('/usuarios/delete',ControladorUsuario.borrarUsuario);
 


export default router;