"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transacciones = void 0;
var connect_1 = __importDefault(require("../database/connect"));
var propietario_1 = __importDefault(require("./propietario"));
var vehiculo_1 = __importDefault(require("./vehiculo"));
var servicio_1 = __importDefault(require("./servicio"));
propietario_1.default.hasMany(vehiculo_1.default);
vehiculo_1.default.belongsTo(propietario_1.default);
exports.Transacciones = connect_1.default.define('Transacciones', {}, { timestamps: true });
vehiculo_1.default.belongsToMany(servicio_1.default, { through: "Transacciones" });
servicio_1.default.belongsToMany(vehiculo_1.default, { through: "Transacciones" });
//# sourceMappingURL=asociaciones.js.map