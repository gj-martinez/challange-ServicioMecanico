import { DataTypes } from "sequelize";
import db from '../database/connect';

const Servicio = db.define('Servicios',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: true
    },
    costo:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
},
{
    timestamps: true,
});


export default Servicio;

