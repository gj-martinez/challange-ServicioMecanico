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
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
});
exports.default = Propietario;
//# sourceMappingURL=propietario.js.map