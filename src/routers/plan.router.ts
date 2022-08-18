import express, { Express, Request, Response } from 'express';                       // para peticiones y archivos.
import  * as p from "../controllers/planes.controller";                               // exportamos todo del controlador business.

const router = express.Router();                                                     // para ramificar las rutas.



router.get('/', p.getAllPlans);                                                      // GET - obtener todas los planes.
router.get('/:id', p.getPlan);                                                       // GET - obtener un planes.
router.put('/:id', p.updatePlan);                                                    // PUT - actualizar un planes.

export default router;  