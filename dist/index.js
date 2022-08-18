"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // peticiones y archivos.
const dotenv_1 = __importDefault(require("dotenv")); // gestionar las variables de entorno
const cors_1 = __importDefault(require("cors")); // permite peticiones desde otros servidores,puertos, paginas.
const morgan_1 = __importDefault(require("morgan")); // para ver las peticiones que se hacen a la base de datos.
const business_router_1 = __importDefault(require("./routers/business.router")); // exportar el router de empresas.
const admin_router_1 = __importDefault(require("./routers/admin.router")); // exportar el router de empresas.
const plan_router_1 = __importDefault(require("./routers/plan.router")); // exportar el router de empresas.
const database_1 = require("./utils/database"); // exporta la clase Database para poder usarla en el index.ts.
//=== Variables
const app = (0, express_1.default)(); // inicializa express
const port = process.env.PORT;
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb' })); // obtiene el puerto del archivo .env
// app.use(bodyParser.json());                                                          // Permite que el servidor entienda json
// app.use(bodyParser.urlencoded({ extended: true }));                                  // Permite que el servidor entienda formularios
dotenv_1.default.config(); // carga las variables de entorno
//=== Middlewares
app.use((0, cors_1.default)()); // cargar politicas de dominios cruzados                             
app.use((0, morgan_1.default)('dev')); // ver las peticiones a la base de datos desde la consola.
app.use(express_1.default.json()); // cargar parametros a través de post.
//=== Rutas
app.use('/empresas', business_router_1.default); // cargar el router de empresas.
app.use('/admin', admin_router_1.default); // cargar el router de empresas.
app.use('/plan', plan_router_1.default); // cargar el router de empresas.
//=== crearmos una instancia y asi conectarnos a la base de datos.
const database = new database_1.Database();
//=== Iniciar el servidor local.
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️Servidor Levantado en https://localhost:${port}`);
});
//# sourceMappingURL=index.js.map