import { Request, Response } from "express";
import { empresasSchema } from "../models/business.schema";                          // importa el schema de empresas
// import Empresa, { IEmpresa } from '../models/business'
import jwt from 'jsonwebtoken';                                                      // permite crear tokens basados en el estandar de jsonwebtoken 


// Variables globales.
export const tokenTemp = 'QuieroPasarDWconBuenaNOTA';


// POST - Registra una empresa (sigip / registrar)
export const registerEmpresa = async (req:Request, res:Response) => {
     const empresa = new empresasSchema({                                                                               // crea un nuevo usuario.
          email:         req.body.email,
          password:      req.body.password,
          plan:          req.body.plan,
          info:          req.body.info,
          galery:        req.body.galery,
          pages:         req.body.pages,
          blocks:        req.body.blocks,
          products:      req.body.products,
          others:        req.body.others,
          videos:        req.body.videos,   
     });
     empresa.password = await empresa.encrypPassword(empresa.password);                                              // encripta la contraseña y la guarda nuevamente.
     const saveEmpresa = await empresa.save()                                                                           // guarda el usuario.
     // Creando token
     const token: string = jwt.sign({ _id: saveEmpresa._id }, process.env.TOKEN || tokenTemp);        // crea un token basado en el estandar de jsonwebtoken.
     res.header('auth-token', token).json(saveEmpresa);                                                                 // retorna el token y el usuario.
};


// POST - Inicia sesión de una empresa (sigip / iniciarSesion)
export const loginEmpresa = async (req:Request, res:Response) => {
     const user = await empresasSchema.findOne({ email: req.body.email });                                    // busca el usuario por email.
     if (!user) return res.status(400).json('Correo y/o contraseña con incorrectos');                         // si no existe el usuario, retorna un error.
     
     const correctPassword = await user.validatePassword(req.body.password);                                  // valida la contraseña.
     if (!correctPassword) return res.status(400).json('Contraseña con invalida');                            // si la contraseña es incorrecta, retorna un error.

     const token: string = jwt.sign({_id: user._id}, process.env.TOKEN || tokenTemp )                        // crea un token basado en el estandar de jsonwebtoken.                                                                          
     res.header('auth-token', token).json(user);                                                              // retorna el token y el usuario.
}


// GET - obtiene todas las empresas.
export const getEmpresas = (req:Request, res:Response) => {
     empresasSchema.find().then(result => {
          result.forEach(element => {
               element.password = 'No se Muestra XD';
          });
          res.send(result);
          res.end();
     })
     .catch(error => console.error(error));
}


// GET - obtiene una empresa por id
export const getEmpresa = async (req:Request, res:Response) => {
     const user = await empresasSchema.findById(req.params.id, { password: 0 });
     if (!user) {
          return res.status(404).json('Empresa no encontrada');
     }
     res.json(user);
}

// DELETE - elimina una empresa.
export const deleteEmpresa = (req:Request, res:Response) => {
     empresasSchema.findByIdAndDelete(req.params.id).then(result => {
          res.send(result);
          res.end();
     }).catch(error => console.error(error));
}

// update - actualiza una empresa.
export const updateEmpresa = (req:Request, res:Response) => {    
     empresasSchema.updateOne({ _id: req.params.id }, {
          email:         req.body.email,
          password:      req.body.password,
          plan:          req.body.plan,
          info:          req.body.info,
          galery:        req.body.galery,
          pages:         req.body.pages,
          blocks:        req.body.blocks,
          products:      req.body.products,
          others:        req.body.others,
          videos:        req.body.videos,
     }).then(result => {
          res.send(result);
          res.end();
     }).catch(error => {
          res.send({menssage: 'Error al actualizar la empresa', error});
          res.end();
     });
}
