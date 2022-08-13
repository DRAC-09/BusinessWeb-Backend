import { Request, Response } from "express";
import { empresasSchema } from "../models/business.schema";


// GET - obtener todas las empresas.
export const getEmpresas = (req:Request, res:Response) => {
     empresasSchema.find().then(result => {
          res.send(result);
          res.end();
     })
     .catch(error => console.error(error));
}


