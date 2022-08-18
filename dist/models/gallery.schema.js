"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: mongoose_1.default.Types.ObjectId,
    img: String,
});
exports.imageSchema = mongoose_1.default.model('images', schema);
//# sourceMappingURL=gallery.schema.js.map