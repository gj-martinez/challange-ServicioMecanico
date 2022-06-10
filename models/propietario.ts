import { DataTypes } from "sequelize";
import Vehiculo from "./vehiculo";
import db from '../database/connect';

const Propietario = db.define('Propietarios',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,

    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dni:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    timestamps: true,
});


export default Propietario;

