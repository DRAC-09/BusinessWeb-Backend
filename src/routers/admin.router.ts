import express, { Express, Request, Response } from 'express';                       // para peticiones y archivos.
import  * as a from "../controllers/admin.controller";                               // exportamos todo del controlador business.
import {validateToken} from "../libs/verifyToken";                                   // exportamos validateToken.

const router = express.Router();                                                     // para ramificar las rutas.


//=== Rutas
router.post('/register-admin', a.registerAdmin);                                     // POST - login de administrador.
router.post('/login-admin', a.loginAdmin);

router.get('/', a.getAllAdmins);                                                     // GET - obtener todas los admins.
router.delete('/:id', a.deleteAdmin);                                                // DELETE - eliminar un admin.


export default router;  