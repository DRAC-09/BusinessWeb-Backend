import mongoose from "mongoose";
import { image } from "./gallery.model";
import { empresa, Info} from "./business.model";                           // importa el modelo de empresa.
import bcrypt from "bcryptjs";                                                   // importa el modulo de encriptacion de contraseñas.



const schema = new mongoose.Schema<empresa>({
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
     plan:     String,
     info:     Array <Info>,
     gallery:  Array <image>,
     pages:    Array,
     blocks:   Array,
     products: Array,
     others:   Array,
     videos:   Array
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

export const empresaSchema = mongoose.model('empresas', schema);                                        // exportar el schema del tipo modelo "empresa".
