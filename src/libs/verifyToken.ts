import {Request, Response, NextFunction} from 'express';                                  // importa los tipos de datos de express.
import jwt from 'jsonwebtoken';                                                           // exporta el middleware.
import { tokenTemp } from '../controllers/business.controller';                           // exportamos tokenTemp para poder usarlo en el middleware.

interface Info {
     _id: string;
     iat: number;
     exp: number;
}

export const validateToken = (req:Request, res:Response, next: NextFunction) => {         // definimos el middleware para verificar el token.
     const token = req.header('auth-token');                                              // obtiene el token del header.
     if (!token) return res.status(401).json('Accesso Denegado');                         // si no existe el token retormamos un mensake de error.
          
     const info = jwt.verify(token, process.env.TOKEN || tokenTemp) as Info               // guardamos el info los datos dentro del token.
     req.userId = info._id;                                                               // guardamos el info en el request.
     next();                                                                              // continua con la ejecución.
}



// OBS: para usar "req.userId" tenemos que externer la interfaz del objeto Request, lo cual haremos en el archivo "types.s.ts"