import { Request, Response } from "express";
import Vehiculo from "../models/vehiculo";
import Propietario from "../models/propietario";
import { validationResult }from 'express-validator';

export const getVehiculos = async(req: Request, res: Response) =>{
    try {
        const vehiculos = await Vehiculo.findAll();
        if(vehiculos.length === 0){
            res.status(404).json({
                status: 404,
                statusMsg: 'Not Found',
                error: "No existe vehiculos creados",
            })
        }else{
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: vehiculos,
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

export const getVehiculo = async(req: Request, res: Response) => {
    
    try {
        const {id} = req.params;
        const vehiculo = await Vehiculo.findOne({
            where: {id: id},
            include: Propietario
        });
        if(!vehiculo){
            res.status(404).json({
                status: 404,
                statusMsg: 'Not Found',
                error: "No existe vehiculo",
            })
        }else{
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: vehiculo,
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

export const postVehiculo = async(req: Request, res: Response) => {
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
        const existVehiculo = await Vehiculo.findOne({
            where: {
                patente:body.patente
            }
        })
        if (existVehiculo) {
            res.status(400).json({
                status: 400,
                statusMsg: 'Not Found',
                error: "El vehiculo ya existe!!"
            })
        }else{
            const vehiculo = await Vehiculo.create({
                marca:body.marca,
                modelo:body.modelo,
                año:body.año,
                patente:body.patente,
                color:body.color,
                PropietarioId:body.PropietarioId,
            })
            await  (await vehiculo).save()
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: vehiculo,
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            statusMsg: 'Internal server error',
            error: "El vehiculo no se puedo crear!",
        })
    }

}

export const putVehiculo = async(req: Request, res: Response) => {
    try {
        const {id} = req.params
        const {body} = req;
        const vehiculo = await Vehiculo.findByPk(id);
        if(!vehiculo){
            res.status(400).json({
                status: 400,
                statusMsg: 'Not Found',
                error: "No existe vehiculo para actualizar"
            })
        }else{
            await vehiculo.update(body);
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: vehiculo,
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            statusMsg: 'Internal server error',
            error: "El vehiculo no se pudo actualizar!",
        })
    }
}

export const deleteVehiculo = async(req: Request, res: Response) => {
    try {
        const {id} = req.params
        const vehiculo = await Vehiculo.findByPk(id);
        
        if(!vehiculo){
            res.status(400).json({
                status: 400,
                statusMsg: 'Not Found',
                error: "No existe vehiculo para eliminar"
            })
        }else{
            await vehiculo.destroy();
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: vehiculo,
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            statusMsg: 'Internal server error',
            error: "El vehiculo no se pudo eliminar!",
        })
    }

    
}