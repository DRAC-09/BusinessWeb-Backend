import mongoose from "mongoose";
import { image } from "./gallery.model";

const schema = new mongoose.Schema<image>({
     id:             mongoose.Types.ObjectId,
     img:            String,
});

export const imageSchema = mongoose.model('images',schema);
