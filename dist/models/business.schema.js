"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresasSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    correo: String,
    contrasena: String,
    nombreEmpresa: String,
    plan: String,
});
exports.empresasSchema = mongoose_1.default.model('empresas', schema);
