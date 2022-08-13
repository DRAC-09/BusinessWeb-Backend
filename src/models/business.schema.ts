import mongoose from "mongoose";
import { empresa } from "./business.model";

const schema = new mongoose.Schema<empresa>({
     _id:           mongoose.Schema.Types.ObjectId,
     correo:        String,
     contrasena:    String,
     nombreEmpresa: String,
     plan:          String,
});


export const empresasSchema = mongoose.model('empresas', schema);
