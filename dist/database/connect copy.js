"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db = new sequelize_1.Sequelize('servicio_mecanico', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = db;
//# sourceMappingURL=connect copy.js.map