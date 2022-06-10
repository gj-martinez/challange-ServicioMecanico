"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connect_1 = __importDefault(require("../database/connect"));
var Servicio = connect_1.default.define('Servicios', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    costo: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    },
}, {
    timestamps: true,
});
exports.default = Servicio;
//# sourceMappingURL=servicio.js.map