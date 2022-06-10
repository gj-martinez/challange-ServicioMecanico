"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connect_1 = __importDefault(require("../database/connect"));
var Propietario = connect_1.default.define('Propietarios', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    dni: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, {
    timestamps: true,
});
exports.default = Propietario;
//# sourceMappingURL=servicio copy.js.map