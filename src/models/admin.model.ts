import { image } from "./gallery.model";


export interface admin {
     email:    string;
     password: string;
     encrypPassword (password: string): Promise<string>;                               // encripta la contraseña (definido en schema).
     validatePassword (password: string): Promise<boolean>;                               // compara la contraseña con la encriptada (definido en schema).
}