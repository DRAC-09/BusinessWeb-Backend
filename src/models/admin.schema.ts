import mongoose from "mongoose";
import { admin} from "./admin.model";                           // importa el modelo de empresa.
import bcrypt from "bcryptjs";                                                   // importa el modulo de encriptacion de contraseñas.



const schema = new mongoose.Schema<admin>({
     email:    {
          type:     String,
          required: true,
          unique:   true,
          lowercase: true,
     },
     password: {
          type:     String,
          required: true,
     },
});



//=== Encryptar contraseña.
schema.methods.encrypPassword = async (password:string): Promise<string> =>{                            
     const salt = await bcrypt.genSalt(10);                                                              // genera un salt de 10 caracteres.
     return bcrypt.hash(password, salt);                                                                 // encripta la contraseña.
};

//=== Validar contraseña.
schema.methods.validatePassword = async function(password:string): Promise<boolean>{
     return await bcrypt.compare(password, this.password);                                               // compara la contraseña con la encriptada.
}

export const adminSchema = mongoose.model('administradores', schema);                                        // exportar el schema del tipo modelo "empresa".
