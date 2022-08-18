"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gallery_controller_1 = require("controllers/gallery.controller");
const router = express_1.default.Router();
router.get("/", gallery_controller_1.getImages);
router.put("/:id/images", gallery_controller_1.addImagen);
//# sourceMappingURL=gallery.router.js.map