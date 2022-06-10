import { DataTypes } from "sequelize";
import db from '../database/connect';

import Propietaro from "./propietario";
import Vehiculo from "./vehiculo";
import Servicio from "./servicio";

Propietaro.hasMany(Vehiculo);
Vehiculo.belongsTo(Propietaro);



export const Transacciones = db.define('Transacciones',{},{timestamps: true});
Vehiculo.belongsToMany(Servicio, { through: "Transacciones"});
Servicio.belongsToMany(Vehiculo, { through: "Transacciones" });

