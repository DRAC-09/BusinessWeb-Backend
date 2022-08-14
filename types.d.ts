declare namespace Express {
     export interface Request {
          userId: string;
     }
}

// OBS: Luego nos vamos a tsconfig.json y agregamos el siguiente archivo:
// "include": [
//      "src"
//    ],
// "files": ["types.d.ts"]