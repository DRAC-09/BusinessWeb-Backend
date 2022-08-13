import express, { Express, Request, Response } from 'express';                       // para peticiones y archivos.
import { getEmpresas } from "../controllers/business.controller";                    // para importar el controlador.

const router = express.Router();                                                     // para ramificar las rutas.



router.get('/', getEmpresas);                                                        // GET - obtener todas las empresas.


export default router;                                                               // exportar el router.