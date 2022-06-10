import { DataTypes } from "sequelize";
import db from '../database/connect';

const Vehiculo = db.define('Vehiculos',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    marca:{
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    año:{
        type: DataTypes.DATE,
        allowNull: false
    },
    patente:{
        type: DataTypes.STRING,
        allowNull: false
    },
    color:{
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    timestamps: true,
});

export default Vehiculo;

