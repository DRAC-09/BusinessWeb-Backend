import { Request, Response } from "express";
import { adminSchema } from "../models/admin.schema"; 
import jwt from 'jsonwebtoken';                                                      // permite crear tokens basados en el estandar de jsonwebtoken 
export const tokenTemp = 'QuieroPasarDWconBuenaNOTA';



// POST - Registra un admin (sigip / registrar)
export const registerAdmin = async (req:Request, res:Response) => {
     const admin = new adminSchema({                                                                               // crea un nuevo usuario.
          email:         req.body.email,
          password:      req.body.password, 
     });
     admin.password = await admin.encrypPassword(admin.password);                                              // encripta la contraseña y la guarda nuevamente.
     const saveAdmin = await admin.save()                                                                           // guarda el usuario.
     // Creando token
     const token: string = jwt.sign({ _id: saveAdmin._id }, process.env.TOKEN || tokenTemp);        // crea un token basado en el estandar de jsonwebtoken.
     res.status(200).json({token});
};


// POST - Inicia sesión de un admin (sigip / iniciarSesion)
export const loginAdmin = async (req:Request, res:Response) => {
     const user = await adminSchema.findOne({ email: req.body.email });                                    // busca el usuario por email.
     if (!user) return res.status(400).json('Correo y/o contraseña con incorrectos');                         // si no existe el usuario, retorna un error.
     
     const correctPassword = await user.validatePassword(req.body.password);
     if (!correctPassword) return res.status(400).json('Contraseña con invalida');                            // si la contraseña es incorrecta, retorna un error.

     const token: string = jwt.sign({_id: user._id}, process.env.TOKEN || tokenTemp )                        // crea un token basado en el estandar de jsonwebtoken.                                                                          
     res.header('auth-token', token).json({user, token});                                                                 // retorna el token y el usuario.
}

// GET - Obtiene todos los administradores (sigip / obtenerTodos)
export const getAllAdmins = async (req:Request, res:Response) => {
     const admins = await adminSchema.find();                                                                 // busca todos los administradores.
     res.json(admins);                                                                                        // retorna los administradores.
}

// DELETE - elimina una empresa.
export const deleteAdmin = (req:Request, res:Response) => {
     adminSchema.findByIdAndDelete(req.params.id).then(result => {
          res.send(result);
          res.end();
     }).catch(error => console.error(error));
}