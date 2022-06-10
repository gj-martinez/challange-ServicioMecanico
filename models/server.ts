import express, {Application} from 'express';
import cors from 'cors';
import propietarioRoutes from '../routes/propietarios.routes';
import vehiculoRoutes from '../routes/vehiculos.routes';
import servicioRoutes from '../routes/servicios.routes';
import transaccionRoutes from '../routes/transacciones.routes';
import db from '../database/connect';
require('./asociaciones');

export class Server{

    private app: Application;
    private port: string;
    private apiRoutes = {
        propietarios: '/api/propietarios',
        vehiculos: '/api/vehiculos',    
        servicios: '/api/servicios',
        transacciones: '/api/transacciones',
        
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnect();
        this.middleware();
        this.routes();
    }

    async dbConnect(){
        try {
            await db.sync({force: false});
            console.log("Database online")
        } catch (error: any) {
            throw new Error(error);
        }
    }

    middleware(){
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiRoutes.propietarios, propietarioRoutes)
        this.app.use(this.apiRoutes.vehiculos, vehiculoRoutes)
        this.app.use(this.apiRoutes.servicios, servicioRoutes)
        this.app.use(this.apiRoutes.transacciones, transaccionRoutes)
        
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('listening on port ' + this.port)
        })
    }
}