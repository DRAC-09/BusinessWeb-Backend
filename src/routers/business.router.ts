import express, { Express, Request, Response } from 'express';                       // para peticiones y archivos.
import  * as e from "../controllers/business.controller";                            // exportamos todo del controlador business.
import  * as g from "../controllers/gallery.controller";                            // exportamos todo del controlador business.
import {validateToken} from "../libs/verifyToken";                                   // exportamos validateToken.

const router = express.Router();                                                     // para ramificar las rutas.

//=== Rutas
router.post('/register-empresa', e.registerEmpresa);                                 // POST - login de administrador.
router.post('/login-empresa', e.loginEmpresa);                                       // POST - login de empresa.

//=== Rutas para administrar las Empresas.
router.get('/', e.getEmpresas);                                                      // GET - obtener todas las empresas.
router.get('/:id', e.getEmpresa);                                                    // GET - obtener una empresa por id.
router.put('/:id', e.updateEmpresa);                                                 // PUT - actualizar una empresa.
router.delete('/:id', e.deleteEmpresa);                                              // DELETE - eliminar una empresa.


//=== Rutas para administrar la galeria
router.put('/:id/gallery', g.addImagen);                                             // PUT - Agregar imagen a la galeria.
router.get('/:id/gallery', g.getGallery);                                            // GET - obtener la galeria de una empresa.
router.get('/gallery/:id', g.getImagen);                                             // GET - obtener una empresa por id.

// router.delete('/:id/gallery/:idImg', g.deleteImagen);                             // DELETE - eliminar una imagen.

export default router;                                                               // exportar el router.