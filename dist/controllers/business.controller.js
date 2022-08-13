"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmpresas = void 0;
const business_schema_1 = require("../models/business.schema");
// GET - obtener todas las empresas.
const getEmpresas = (req, res) => {
    business_schema_1.empresasSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.getEmpresas = getEmpresas;
