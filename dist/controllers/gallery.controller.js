"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGallery = exports.getImagen = exports.getGallery = exports.addImagen = void 0;
const business_schema_1 = require("../models/business.schema"); // importa el schema de empresas
const mongoose_1 = __importDefault(require("mongoose"));
// POST - agrega una imagen.
const addImagen = (req, res) => {
    business_schema_1.empresaSchema.updateOne({ _id: req.params.id }, {
        $push: {
            gallery: {
                _id: new mongoose_1.default.Types.ObjectId(),
                img: req.body.img,
            }
        }
    }).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send({ menssage: 'Error al actualizar la empresa', error });
        res.end();
    });
};
exports.addImagen = addImagen;
// obtener solo la galeria de una empresa.
const getGallery = (req, res) => {
    business_schema_1.empresaSchema.findById(req.params.id, { gallery: 1 }).then(result => {
        res.send(result);
        res.end();
    }).catch(error => console.error(error));
};
exports.getGallery = getGallery;
// Obtener una imagen de la galeria de una empresa.
const getImagen = (req, res) => {
    business_schema_1.empresaSchema.findById(req.params.id, { gallery: 1 }).then(result => {
        res.send(result);
        res.end();
    }).catch(error => console.error(error));
};
exports.getImagen = getImagen;
// actulizar galeria de una empresa.
const updateGallery = (req, res) => {
    business_schema_1.empresaSchema.updateOne({ _id: req.params.id }, {
        gallery: req.body.gallery
    }).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send({ menssage: 'Error al actualizar la Galeria', error });
        res.end();
    });
};
exports.updateGallery = updateGallery;
//# sourceMappingURL=gallery.controller.js.map