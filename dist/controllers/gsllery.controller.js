"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addimagen = void 0;
const gallery_schema_1 = require("models/gallery.schema");
const mongoose_1 = __importDefault(require("mongoose"));
const addimagen = (req, res) => {
    gallery_schema_1.imageSchema.updateOne({ _id: req.params.id }, {
        $push: {
            gallery: {
                _id: new mongoose_1.default.Types.ObjectId(req.body.id),
                img: req.body.img
            }
        }
    }).then(result => {
        res.send({ message: 'Pokemon agregado', result });
        res.end();
    }).catch(error => {
        res.send({ message: 'Ocurrio un error', error });
        res.end();
    });
};
exports.addimagen = addimagen;
//# sourceMappingURL=gsllery.controller.js.map