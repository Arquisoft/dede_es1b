import express, { Request, Response, Router } from 'express';

import * as ControladorUsuario from './ControladorUsuario';

const router:Router = express.Router()

router.get('/usuarios/list',
 ControladorUsuario.getUsuarios);

 


export default router;