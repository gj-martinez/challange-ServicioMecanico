"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var transacciones_controllers_1 = require("../controllers/transacciones.controllers");
var router = express_1.Router();
router.post('/', transacciones_controllers_1.postTransacciones);
router.get('/:vehiculoId', transacciones_controllers_1.getHistorialVehiculoServicio);
router.get('/presupuesto/:vehiculoId', transacciones_controllers_1.getPresupuestoTotal);
exports.default = router;
//# sourceMappingURL=transacciones.routes.js.map