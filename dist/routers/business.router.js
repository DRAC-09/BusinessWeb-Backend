"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // para peticiones y archivos.
const business_controller_1 = require("../controllers/business.controller"); // para importar el controlador.
const router = express_1.default.Router(); // para ramificar las rutas.
router.get('/', business_controller_1.getEmpresas); // GET - obtener todas las empresas.
exports.default = router; // exportar el router.
