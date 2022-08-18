import mongoose from "mongoose";
import { image } from "./gallery.model";


export interface empresa {
     plan:     string;
     info:     Info;
     gallery:  Array <image>;
     email:    string;
     pages:    any;
     blocks:   any;
     products: any;
     others:   any;
     videos:   any;
     password: string;
     encrypPassword (password: string): Promise<string>;                               // encripta la contraseña (definido en schema).
     validatePassword (password: string): Promise<boolean>;                               // compara la contraseña con la encriptada (definido en schema).
}


export interface Info {
     name:        string;
     tittle:      string;
     description: string;
     logo:        string;
     favicon:     string;
}