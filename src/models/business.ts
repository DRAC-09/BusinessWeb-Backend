import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcryptjs';


//=== INTERFAZ

export interface IEmpresa extends Document {
     plan:     Plan;
     info:     Info;
     galery:   Array;
     email:    string;
     pages:    Array;
     blocks:   Array;
     products: Array;
     others:   Array;
     videos:   Array;
     password: string;
     encrypPassword(password: string): Promise<string>;
     validatePassword(password: string): Promise<boolean>;                               // compara la contraseña con la encriptada (definido en schema).
}

export interface Plan {
     name: string;
     pages: string;
     blocks: string;
     categories: string;
     products: string;
}

export interface Array {
}

export interface Info {
     favicon:     string;
     logo:        string;
     description: string;
     name:        string;
     tittle:      string;
}




//=== SCHEMA

const schema = new Schema({
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
     plan:     Array <Plan>,
     info:     Array <Info>,
     galery:   Array,
     pages:    Array,
     blocks:   Array,
     products: Array,
     others:   Array,
     videos:   Array
});

schema.methods.encrypPassword = async (password: string): Promise<string> => {
     const salt = await bcrypt.genSalt(10);
     return bcrypt.hash(password, salt);
};

schema.methods.validatePassword = async function (password: string): Promise<boolean> {
     return await bcrypt.compare(password, this.password);
};

export default model<IEmpresa>('Empresas', schema);
