import express, { Express, Request, Response } from 'express';                       // para peticiones y archivos.
import dotenv from 'dotenv';                                                         // para gestionar las variables de entorno
import { Database } from './utils/database';                                          // para conectar con la base de datos.
// import bodyParser from 'body-parser';                                                // leer parametros a través de post.
// import cors from 'cors';                                                             // para permitir peticiones desde otras paginas.


import mongoose from 'mongoose';
import empresasRouter from './routers/business.router';                              // para ramificar las rutas.


dotenv.config();                                                                     // cargar las variables de entorno                                                      
const database:Database = new Database();                                            // crear una instancia de la base de datos.
const app: Express = express();                                                      // inicializar express
const port = process.env.PORT;                                                       // obtener port del archivo .env


// app.use(cors());                                                                     // cargar politicas de dominios cruzados                             
// app.use(bodyParser.json());                                                          // cargar parametros a través de post.
// app.use(bodyParser.urlencoded({ extended: true }));                                  // cargar parametros a través de post.



// Rutas
app.use('/empresas', empresasRouter);                                                // cargar el router de empresas.


// Iniciar el servidor local.
app.get('/', (req: Request, res: Response) => {
     res.send('Express + TypeScript Server');
});

app.listen(port, () => {
     console.log(`⚡️Servidor Levantado en https://localhost:${port}`);
});