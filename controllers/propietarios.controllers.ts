import { Request, Response } from "express";
import Propietario from "../models/propietario";
import { validationResult }from 'express-validator';

export const getPropietarios = async(req: Request, res: Response) =>{
    try {
        const propietarios = await Propietario.findAll();
        if(propietarios.length === 0){
            res.status(404).json({
                status: 404,
                statusMsg: 'Not Found',
                error: "No existe propietarios creados",
            })
        }else{
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: propietarios,
            })
        }
        
    } catch (error) {
        res.status(404).json({
            status: 404,
            statusMsg: 'Not Found',
            error: error,
        })
    }

}

export const getPropietario = async(req: Request, res: Response) => {
    
    try {
        const {id} = req.params;
        const propietario = await Propietario.findByPk(id);
        if(!propietario){
            res.status(404).json({
                status: 404,
                statusMsg: 'Not Found',
                error: "No existen propietarios",
            })
        }else{
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: propietario,
            })
        }
    } catch (error) {
        res.status(404).json({
            status: 404,
            statusMsg: 'Not Found',
            error: error,
        })
    }
}

export const postPropietario = async(req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 400,
                statusMsg: 'Not Found',
                error: errors.array()
            });
        }
        const {body} = req;
        const existPropietario = await Propietario.findOne({
            where: {
                apellido:body.apellido,
                nombre:body.nombre
            }
        })
        if (existPropietario) {
            res.status(400).json({
                status: 400,
                statusMsg: 'Not Found',
                error: "El propietario ya existe!!"
            })
        }else{
            const propietario = await Propietario.create({
                apellido:body.apellido,
                nombre:body.nombre,
                dni:body.dni
            })
            await  (await propietario).save()
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: propietario,
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            statusMsg: 'Internal server error',
            error: "El propietario no se pudo crear!",
        })
    }

}

export const putPropietario = async(req: Request, res: Response) => {
    try {
        const {id} = req.params
        const {body} = req;
        const propietario = await Propietario.findByPk(id);
        if(!propietario){
            res.status(400).json({
                status: 400,
                statusMsg: 'Not Found',
                error: "No existe propietario para actualizar"
            })
        }else{
            await propietario.update(body);
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: propietario,
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            statusMsg: 'Internal server error',
            error: "El propietario no se pudo actualizar!",
        })
    }
}

export const deletePropietario = async(req: Request, res: Response) => {
    try {
        const {id} = req.params
        const propietario = await Propietario.findByPk(id);
        
        if(!propietario){
            res.status(400).json({
                status: 400,
                statusMsg: 'Not Found',
                error: "No existe propietario para eliminar"
            })
        }else{
            await propietario.destroy();
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: propietario,
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            statusMsg: 'Internal server error',
            error: "El propietario no se pudo eliminar!",
        })
    }

    
}