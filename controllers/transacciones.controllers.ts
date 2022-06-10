import { Request, Response } from "express";
import Vehiculo from "../models/vehiculo";
import Servicio from "../models/servicio";
import {Transacciones} from "../models/asociaciones"


export const postTransacciones = async(req: Request, res: Response) => {
    try {
            const {body} = req;
            
            const car = await Vehiculo.findByPk(body.vehiculoId);
            const vehiculo =  JSON.parse(JSON.stringify(car));
        
            const service = await Servicio.findByPk(body.servicioId);
            const servicio =  JSON.parse(JSON.stringify(service));
        
            if((vehiculo.color.toLowerCase() === "Gris".toLocaleLowerCase()) && servicio.nombre.toLowerCase() === "Pintura".toLocaleLowerCase()){
                return res.status(404).json({
                    status: 404,
                    statusMsg: 'Not Found',
                    error: "Por politica del taller no permite pintar autos de color gris!!",
                })
            }else{
                console.log(body)
                const transaccion = await Transacciones.create({
                    VehiculoId:body.vehiculoId,
                    ServicioId:body.servicioId
                })
                res.status(200).json({
                    status: 200,
                    statusMsg: 'Succes',
                    data: transaccion,
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

export const getHistorialVehiculoServicio = async(req: Request, res: Response) => {
    
    try {
        const {vehiculoId} = req.params;

        const transaccion = await Vehiculo.findOne({
            where: {id: vehiculoId},
            include: Servicio
        });
        if(!transaccion){
            res.status(404).json({
                status: 404,
                statusMsg: 'Not Found',
                error: "No existe transaccion",
            })
        }else{
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: transaccion,
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
export const getPresupuestoTotal = async(req: Request, res: Response) => {
    
    try {
        const {vehiculoId} = req.params;
        

        const presupuesto = await Vehiculo.findOne({
            where: {id: vehiculoId},
            include: Servicio
        });

        if(!presupuesto){
            res.status(404).json({
                status: 404,
                statusMsg: 'Not Found',
                error: "No existe transaccion",
            })
        }else{
            const vehiculo =  JSON.parse(JSON.stringify(presupuesto));
            
            let presupuestoTotal = 0

            for (var val of vehiculo.Servicios) {
                presupuestoTotal += val.costo
            }
            res.status(200).json({
                status: 200,
                statusMsg: 'Succes',
                data: "presupuesto total es: $" + presupuestoTotal,
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
