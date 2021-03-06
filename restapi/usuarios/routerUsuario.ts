import express, { Router } from 'express';

import * as ControladorUsuario from './ControladorUsuario';

const router:Router = express.Router()

router.get('/Usuarios/list',
 ControladorUsuario.getUsuarios);
router.post('/usuarios/inicioSesion',ControladorUsuario.inicioSesion);
router.post('/usuarios/add',ControladorUsuario.añadirUsuario);
router.post('/usuarios/getId',ControladorUsuario.getIdUserByWebId);
router.post('/usuarios/delete',ControladorUsuario.borrarUsuario);



export default router;