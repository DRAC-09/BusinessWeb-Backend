import { Request, Response } from "express";
import { planSchema } from "../models/plans.schema";                          // importa el schema de empresas


// GET - Obtener todos los planes
export const getAllPlans = async (req:Request, res:Response) => {
     const plans = await planSchema.find();                                                                 // busca todos los administradores.
     res.json(plans);                                                                                        // retorna los administradores.
}

// GET - Obtener un plan por id
export const getPlan = async (req:Request, res:Response) => {
     const plan = await planSchema.findById(req.params.id);                                                 // busca un administrador por id.
     res.json(plan);                                                                                          // retorna el administrador.
}

// PUT - Actualizar un plan
export const updatePlan = async (req:Request, res:Response) => {
     const { id } = req.params;                                                                              // obtiene el id del plan.
     const plan = await planSchema.findByIdAndUpdate(id, req.body, { new: true });                          // actualiza el plan.
     res.json(plan);                                                                                          // retorna el plan actualizado.
}