"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var vehiculo_1 = __importDefault(require("./vehiculo"));
var servicio_1 = __importDefault(require("./servicio"));
var connect_1 = __importDefault(require("../database/connect"));
var Transaccion = connect_1.default.define('Transacciones', {
    VehiculoId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: vehiculo_1.default,
            key: 'id'
        }
    },
    ServicioId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: servicio_1.default,
            key: 'id'
        }
    },
    CostoTotal: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    },
}, {
    timestamps: true,
});
exports.default = Transaccion;
//# sourceMappingURL=transaccion.js.map