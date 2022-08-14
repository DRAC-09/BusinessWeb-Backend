"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // para peticiones y archivos.
const e = __importStar(require("../controllers/business.controller")); // exportamos todo del controlador business.
const verifyToken_1 = require("../libs/verifyToken"); // exportamos validateToken.
const router = express_1.default.Router(); // para ramificar las rutas.
//=== Rutas
router.post('/register-empresa', e.registerEmpresa); // POST - login de administrador.
router.post('/login-empresa', e.loginEmpresa); // POST - login de empresa.
//=== Rutas accesibles solo si el usuario esta autenticado.
router.get('/', verifyToken_1.validateToken, e.getEmpresas); // GET - obtener todas las empresas.
router.get('/:id', verifyToken_1.validateToken, e.getEmpresa); // GET - obtener una empresa por id.
router.put('/:id', verifyToken_1.validateToken, e.updateEmpresa); // PUT - actualizar una empresa.
router.delete('/:id', verifyToken_1.validateToken, e.deleteEmpresa); // DELETE - eliminar una empresa.
exports.default = router; // exportar el router.
