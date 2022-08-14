import express, { Express, Request, Response } from 'express';                       // para peticiones y archivos.
import  * as e from "../controllers/business.controller";                            // exportamos todo del controlador business.
import {validateToken} from "../libs/verifyToken";                                   // exportamos validateToken.

const router = express.Router();                                                     // para ramificar las rutas.

//=== Rutas
router.post('/register-empresa', e.registerEmpresa);                                 // POST - login de administrador.
router.post('/login-empresa', e.loginEmpresa);                                       // POST - login de empresa.

//=== Rutas accesibles solo si el usuario esta autenticado.
router.get('/',validateToken, e.getEmpresas);                                        // GET - obtener todas las empresas.
router.get('/:id',validateToken, e.getEmpresa);                                      // GET - obtener una empresa por id.
router.put('/:id',validateToken, e.updateEmpresa);                                   // PUT - actualizar una empresa.
router.delete('/:id',validateToken, e.deleteEmpresa);                                // DELETE - eliminar una empresa.



export default router;                                                               // exportar el router.