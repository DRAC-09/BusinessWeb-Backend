import bcrypt from "bcryptjs";                                                   // importa el modulo de encriptacion de contraseñas.


export interface empresa {
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
     encrypPassword (password: string): Promise<string>;                               // encripta la contraseña (definido en schema).
     validatePassword (password: string): Promise<boolean>;                               // compara la contraseña con la encriptada (definido en schema).
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