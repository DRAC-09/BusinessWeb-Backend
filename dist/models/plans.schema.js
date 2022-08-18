"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.planSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: String,
    pages: Number,
    categories: Number,
    blocks: Number,
    products: Number,
});
exports.planSchema = mongoose_1.default.model('planes', schema);
//# sourceMappingURL=plans.schema.js.map