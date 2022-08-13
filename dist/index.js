"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // para peticiones y archivos.
const dotenv_1 = __importDefault(require("dotenv")); // para gestionar las variables de entorno
const database_1 = require("./utils/database"); // para conectar con la base de datos.
const business_router_1 = __importDefault(require("./routers/business.router")); // para ramificar las rutas.
dotenv_1.default.config(); // cargar las variables de entorno                                                      
const database = new database_1.Database(); // crear una instancia de la base de datos.
const app = (0, express_1.default)(); // inicializar express
const port = process.env.PORT; // obtener port del archivo .env
// app.use(cors());                                                                     // cargar politicas de dominios cruzados                             
// app.use(bodyParser.json());                                                          // cargar parametros a través de post.
// app.use(bodyParser.urlencoded({ extended: true }));                                  // cargar parametros a través de post.
// Rutas
app.use('/empresas', business_router_1.default); // cargar el router de empresas.
// Iniciar el servidor local.
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️Servidor Levantado en https://localhost:${port}`);
});
