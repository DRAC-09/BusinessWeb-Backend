"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // exporta el middleware.
const business_controller_1 = require("../controllers/business.controller"); // exportamos tokenTemp para poder usarlo en el middleware.
const validateToken = (req, res, next) => {
    const token = req.header('auth-token'); // obtiene el token del header.
    if (!token)
        return res.status(401).json('Accesso Denegado'); // si no existe el token retormamos un mensake de error.
    const info = jsonwebtoken_1.default.verify(token, process.env.TOKEN || business_controller_1.tokenTemp); // guardamos el info los datos dentro del token.
    req.userId = info._id; // guardamos el info en el request.
    next(); // continua con la ejecución.
};
exports.validateToken = validateToken;
// OBS: para usar "req.userId" tenemos que externer la interfaz del objeto Request, lo cual haremos en el archivo "types.s.ts"
//# sourceMappingURL=verifyToken.js.map