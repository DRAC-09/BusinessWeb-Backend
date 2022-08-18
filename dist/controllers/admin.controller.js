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
exports.deleteAdmin = exports.getAllAdmins = exports.loginAdmin = exports.registerAdmin = exports.tokenTemp = void 0;
const admin_schema_1 = require("../models/admin.schema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // permite crear tokens basados en el estandar de jsonwebtoken 
exports.tokenTemp = 'QuieroPasarDWconBuenaNOTA';
// POST - Registra un admin (sigip / registrar)
const registerAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = new admin_schema_1.adminSchema({
        email: req.body.email,
        password: req.body.password,
    });
    admin.password = yield admin.encrypPassword(admin.password); // encripta la contraseña y la guarda nuevamente.
    const saveAdmin = yield admin.save(); // guarda el usuario.
    // Creando token
    const token = jsonwebtoken_1.default.sign({ _id: saveAdmin._id }, process.env.TOKEN || exports.tokenTemp); // crea un token basado en el estandar de jsonwebtoken.
    res.status(200).json({ token });
});
exports.registerAdmin = registerAdmin;
// POST - Inicia sesión de un admin (sigip / iniciarSesion)
const loginAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield admin_schema_1.adminSchema.findOne({ email: req.body.email }); // busca el usuario por email.
    if (!user)
        return res.status(400).json('Correo y/o contraseña con incorrectos'); // si no existe el usuario, retorna un error.
    const correctPassword = yield user.validatePassword(req.body.password);
    if (!correctPassword)
        return res.status(400).json('Contraseña con invalida'); // si la contraseña es incorrecta, retorna un error.
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN || exports.tokenTemp); // crea un token basado en el estandar de jsonwebtoken.                                                                          
    res.header('auth-token', token).json({ user, token }); // retorna el token y el usuario.
});
exports.loginAdmin = loginAdmin;
// GET - Obtiene todos los administradores (sigip / obtenerTodos)
const getAllAdmins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield admin_schema_1.adminSchema.find(); // busca todos los administradores.
    res.json(admins); // retorna los administradores.
});
exports.getAllAdmins = getAllAdmins;
// DELETE - elimina una empresa.
const deleteAdmin = (req, res) => {
    admin_schema_1.adminSchema.findByIdAndDelete(req.params.id).then(result => {
        res.send(result);
        res.end();
    }).catch(error => console.error(error));
};
exports.deleteAdmin = deleteAdmin;
//# sourceMappingURL=admin.controller.js.map