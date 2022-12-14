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
const g = __importStar(require("../controllers/gallery.controller")); // exportamos todo del controlador business.
const router = express_1.default.Router(); // para ramificar las rutas.
//=== Rutas
router.post('/register-empresa', e.registerEmpresa); // POST - login de administrador.
router.post('/login-empresa', e.loginEmpresa); // POST - login de empresa.
//=== Rutas para administrar las Empresas.
router.get('/', e.getEmpresas); // GET - obtener todas las empresas.
router.get('/:id', e.getEmpresa); // GET - obtener una empresa por id.
router.put('/:id', e.updateEmpresa); // PUT - actualizar una empresa.
router.delete('/:id', e.deleteEmpresa); // DELETE - eliminar una empresa.
//=== Rutas para administrar la galeria
router.put('/:id/gallery', g.addImagen); // PUT - Agregar imagen a la galeria.
router.get('/:id/gallery', g.getGallery); // GET - obtener la galeria de una empresa.
router.get('/gallery/:id', g.getImagen); // GET - obtener una empresa por id.
// router.delete('/:id/gallery/:idImg', g.deleteImagen);                             // DELETE - eliminar una imagen.
exports.default = router; // exportar el router.
//# sourceMappingURL=business.router.js.map