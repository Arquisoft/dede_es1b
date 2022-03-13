import express, { Request, Response, Router } from 'express';

import * as ControladorUsuario from './ControladorUsuario';

const router:Router = express.Router()

router.get('/Usuarios/list',
 ControladorUsuario.getUsuarios);
router.post('/login',ControladorUsuario.checkUsuario);

 


export default router;