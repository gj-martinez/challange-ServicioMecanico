"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connect_1 = __importDefault(require("../database/connect"));
var Vehiculo = connect_1.default.define('Vehiculos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    año: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    patente: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
});
exports.default = Vehiculo;
//# sourceMappingURL=vehiculo.js.map