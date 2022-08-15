"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmpresa = exports.deleteEmpresa = exports.getEmpresa = exports.getEmpresas = exports.loginEmpresa = exports.registerEmpresa = exports.tokenTemp = void 0;
const business_schema_1 = require("../models/business.schema"); // importa el schema de empresas
// import Empresa, { IEmpresa } from '../models/business'
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // permite crear tokens basados en el estandar de jsonwebtoken 
// Variables globales.
exports.tokenTemp = 'QuieroPasarDWconBuenaNOTA';
// POST - Registra una empresa (sigip / registrar)
const registerEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empresa = new business_schema_1.empresasSchema({
        email: req.body.email,
        password: req.body.password,
        plan: req.body.plan,
        info: req.body.info,
        galery: req.body.galery,
        pages: req.body.pages,
        blocks: req.body.blocks,
        products: req.body.products,
        others: req.body.others,
        videos: req.body.videos,
    });
    empresa.password = yield empresa.encrypPassword(empresa.password); // encripta la contraseña y la guarda nuevamente.
    const saveEmpresa = yield empresa.save(); // guarda el usuario.
    // Creando token
    const token = jsonwebtoken_1.default.sign({ _id: saveEmpresa._id }, process.env.TOKEN || exports.tokenTemp); // crea un token basado en el estandar de jsonwebtoken.
    res.header('auth-token', token).json(saveEmpresa); // retorna el token y el usuario.
});
exports.registerEmpresa = registerEmpresa;
// POST - Inicia sesión de una empresa (sigip / iniciarSesion)
const loginEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield business_schema_1.empresasSchema.findOne({ email: req.body.email }); // busca el usuario por email.
    if (!user)
        return res.status(400).json('Correo y/o contraseña con incorrectos'); // si no existe el usuario, retorna un error.
    const correctPassword = yield user.validatePassword(req.body.password); // valida la contraseña.
    if (!correctPassword)
        return res.status(400).json('Contraseña con invalida'); // si la contraseña es incorrecta, retorna un error.
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN || exports.tokenTemp); // crea un token basado en el estandar de jsonwebtoken.                                                                          
    res.header('auth-token', token).json(user); // retorna el token y el usuario.
});
exports.loginEmpresa = loginEmpresa;
// GET - obtiene todas las empresas.
const getEmpresas = (req, res) => {
    business_schema_1.empresasSchema.find().then(result => {
        result.forEach(element => {
            element.password = 'No se Muestra XD';
        });
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.getEmpresas = getEmpresas;
// GET - obtiene una empresa por id
const getEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield business_schema_1.empresasSchema.findById(req.params.id, { password: 0 });
    if (!user) {
        return res.status(404).json('Empresa no encontrada');
    }
    res.json(user);
});
exports.getEmpresa = getEmpresa;
// DELETE - elimina una empresa.
const deleteEmpresa = (req, res) => {
    business_schema_1.empresasSchema.findByIdAndDelete(req.params.id).then(result => {
        res.send(result);
        res.end();
    }).catch(error => console.error(error));
};
exports.deleteEmpresa = deleteEmpresa;
// update - actualiza una empresa.
const updateEmpresa = (req, res) => {
    business_schema_1.empresasSchema.updateOne({ _id: req.params.id }, {
        email: req.body.email,
        password: req.body.password,
        plan: req.body.plan,
        info: req.body.info,
        galery: req.body.galery,
        pages: req.body.pages,
        blocks: req.body.blocks,
        products: req.body.products,
        others: req.body.others,
        videos: req.body.videos,
    }).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send({ menssage: 'Error al actualizar la empresa', error });
        res.end();
    });
};
exports.updateEmpresa = updateEmpresa;
