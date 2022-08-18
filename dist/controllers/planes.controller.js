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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlan = exports.getPlan = exports.getAllPlans = void 0;
const plans_schema_1 = require("../models/plans.schema"); // importa el schema de empresas
// GET - Obtener todos los planes
const getAllPlans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const plans = yield plans_schema_1.planSchema.find(); // busca todos los administradores.
    res.json(plans); // retorna los administradores.
});
exports.getAllPlans = getAllPlans;
// GET - Obtener un plan por id
const getPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const plan = yield plans_schema_1.planSchema.findById(req.params.id); // busca un administrador por id.
    res.json(plan); // retorna el administrador.
});
exports.getPlan = getPlan;
// PUT - Actualizar un plan
const updatePlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // obtiene el id del plan.
    const plan = yield plans_schema_1.planSchema.findByIdAndUpdate(id, req.body, { new: true }); // actualiza el plan.
    res.json(plan); // retorna el plan actualizado.
});
exports.updatePlan = updatePlan;
//# sourceMappingURL=planes.controller.js.map