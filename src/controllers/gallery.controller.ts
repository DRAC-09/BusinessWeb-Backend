import { Request, Response } from "express";
import { empresaSchema } from "../models/business.schema";                          // importa el schema de empresas
import mongoose, {ObjectId}  from "mongoose";



// POST - agrega una imagen.
export const addImagen = (req:Request, res:Response) => {    
     empresaSchema.updateOne({ _id: req.params.id }, {
          $push: {
               gallery: {
                    _id: new mongoose.Types.ObjectId(),
                    img: req.body.img,
               }
          }
     }).then(result => {
          res.send(result);
          res.end();
     }).catch(error => {
          res.send({menssage: 'Error al actualizar la empresa', error});
          res.end();
     });
}

// obtener solo la galeria de una empresa.
export const getGallery = (req:Request, res:Response) => {
     empresaSchema.findById(req.params.id, { gallery: 1 }).then(result => {
          res.send(result);
          res.end();
     }).catch(error => console.error(error));
}


// Obtener una imagen de la galeria de una empresa.
export const getImagen = (req:Request, res:Response) => {
     empresaSchema.findById(req.params.id, { gallery: 1 }).then(result => {
          res.send(result);
          res.end();
     }).catch(error => console.error(error));
}

// actulizar galeria de una empresa.
export const updateGallery = (req:Request, res:Response) => {
     empresaSchema.updateOne({ _id: req.params.id }, {
          gallery: req.body.gallery
     }).then(result => {
          res.send(result);
          res.end();
     }).catch(error => {
          res.send({menssage: 'Error al actualizar la Galeria', error});
          res.end();
     });
}

