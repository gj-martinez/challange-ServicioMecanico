import { Request, Response } from "express";
import Servicio from "../models/servicio";
import { validationResult }from 'express-validator';

export const getServicios = async(req: Request, res: Response) =>{
    try {
        const servicios = await Servicio.findAll();
        if(servicios.length === 0){
            res.status(404).json({
                status: 404,
                statusMsg: 'Not Found',
                error: "No existe servicios creados",
            })
        }else{
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: servicios,
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

export const getServicio = async(req: Request, res: Response) => {
    
    try {
        const {id} = req.params;
        const servicio = await Servicio.findByPk(id);
        if(!servicio){
            res.status(404).json({
                status: 404,
                statusMsg: 'Not Found',
                error: "No existe servicio",
            })
        }else{
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: servicio,
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

export const postServicio = async(req: Request, res: Response) => {
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
        const existServicio = await Servicio.findOne({
            where: {
                nombre:body.nombre
            }
        })
        if (existServicio) {
            res.status(400).json({
                status: 400,
                statusMsg: 'Not Found',
                error: "El servicio ya existe!!"
            })
        }else{
            const servicio = await Servicio.create({
                nombre:body.nombre,
                descripcion:body.descripcion,
                costo:body.costo
            })
            await  (await servicio).save()
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: servicio,
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            statusMsg: 'Internal server error',
            error: "El servicio no se pudo crear!",
        })
    }

}

export const putServicio = async(req: Request, res: Response) => {
    try {
        const {id} = req.params
        const {body} = req;
        const servicio = await Servicio.findByPk(id);
        if(!servicio){
            res.status(400).json({
                status: 400,
                statusMsg: 'Not Found',
                error: "No existe servicio para actualizar"
            })
        }else{
            await servicio.update(body);
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: servicio,
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            statusMsg: 'Internal server error',
            error: "El servicio no se pudo actualizar!",
        })
    }
}

export const deleteServicio = async(req: Request, res: Response) => {
    try {
        const {id} = req.params
        const servicio = await Servicio.findByPk(id);
        
        if(!servicio){
            res.status(400).json({
                status: 400,
                statusMsg: 'Not Found',
                error: "No existe servicio para eliminar"
            })
        }else{
            await servicio.destroy();
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: servicio,
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            statusMsg: 'Internal server error',
            error: "El servicio no se pudo eliminar!",
        })
    }

    
}