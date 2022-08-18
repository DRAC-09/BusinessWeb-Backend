import express, { Express, Request, Response } from 'express';                       // peticiones y archivos.
import dotenv from 'dotenv';                                                         // gestionar las variables de entorno
import cors from 'cors';                                                             // permite peticiones desde otros servidores,puertos, paginas.
import morgan from 'morgan';                                                         // para ver las peticiones que se hacen a la base de datos.
import path from 'path';                                                             // para gestionar las rutas de los archivos.                      
import bodyParser from 'body-parser';                                                // para gestionar las peticiones de los formularios.


import empresasRouter from './routers/business.router';                              // exportar el router de empresas.
import adminsRouter from './routers/admin.router';                                   // exportar el router de empresas.
import plansRouter from './routers/plan.router';                                     // exportar el router de empresas.
import { Database } from './utils/database';                                         // exporta la clase Database para poder usarla en el index.ts.



//=== Variables
const app: Express = express();                                                      // inicializa express
const port = process.env.PORT;
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));                                                       // obtiene el puerto del archivo .env
// app.use(bodyParser.json());                                                          // Permite que el servidor entienda json
// app.use(bodyParser.urlencoded({ extended: true }));                                  // Permite que el servidor entienda formularios

dotenv.config();                                                                     // carga las variables de entorno

//=== Middlewares
app.use(cors());                                                                     // cargar politicas de dominios cruzados                             
app.use(morgan('dev'));                                                              // ver las peticiones a la base de datos desde la consola.
app.use(express.json());                                                             // cargar parametros a través de post.





//=== Rutas
app.use('/empresas', empresasRouter);                                                // cargar el router de empresas.
app.use('/admin', adminsRouter);                                                // cargar el router de empresas.
app.use('/plan', plansRouter);                                                // cargar el router de empresas.




//=== crearmos una instancia y asi conectarnos a la base de datos.
const database:Database = new Database(); 

//=== Iniciar el servidor local.
app.get('/', (req: Request, res: Response) => {
     res.send('Express + TypeScript Server');
});

app.listen(port, () => {
     console.log(`⚡️Servidor Levantado en https://localhost:${port}`);
});

