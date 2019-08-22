import{Router} from 'express';
import {createUsuarios, consultUsuarios, oneUsuario, consultarLogin} from '../controllers/usuarios.controller';
const router = Router();

// /api/usuarios/
router.post('/crear', createUsuarios);
router.get('/consultar', consultUsuarios);


// /api/usuarios/some usuario
router.get('/CONSULTA', oneUsuario);
router.get('/login', consultarLogin);


export default router; 