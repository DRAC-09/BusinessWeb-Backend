import mongoose from "mongoose";

export type planes = 'Gratis'|'Basico'|'Profesional'

export interface empresa {
     _id:           mongoose.Schema.Types.ObjectId;
     correo:        string;
     contrasena:    string;
     nombreEmpresa: string;
     plan:          planes;
}