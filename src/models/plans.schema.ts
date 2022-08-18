import mongoose from "mongoose";
import { plan} from "./plans.models";                           // importa el modelo de empresa.


const schema = new mongoose.Schema<plan>({
     name:       String,
     pages:      Number,
     categories: Number,
     blocks:     Number,
     products:   Number,
});


export const planSchema = mongoose.model('planes', schema);