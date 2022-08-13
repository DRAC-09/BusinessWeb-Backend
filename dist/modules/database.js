"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const dotenv_1 = __importDefault(require("dotenv")); // para gestionar las variables de entorno
const mongoose_1 = __importDefault(require("mongoose")); // para gestionar la conexion con la base de datos
dotenv_1.default.config(); // cargar las variables de entorno                                                      
class Database {
    constructor() {
        this.conectar();
    }
    conectar() {
        mongoose_1.default
            .connect(String(process.env.mongo_BusinessWeb)) // Para leer las variables de entorno
            .then(result => console.log('Conectado a la MongoDB Atlas'))
            .catch(err => console.log(err));
    }
}
exports.Database = Database;
// export const prueba = 'prueba';
// export default Database;
