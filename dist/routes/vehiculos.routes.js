"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var vehiculos_controllers_1 = require("../controllers/vehiculos.controllers");
var express_validator_1 = require("express-validator");
var router = express_1.Router();
router.get('/', vehiculos_controllers_1.getVehiculos);
router.get('/:id', vehiculos_controllers_1.getVehiculo);
router.post('/', [
    express_validator_1.body('marca').isAlpha(),
    express_validator_1.body('color').isAlpha(),
    express_validator_1.body('año').isDate()
], vehiculos_controllers_1.postVehiculo);
router.put('/:id', vehiculos_controllers_1.putVehiculo);
router.delete('/:id', vehiculos_controllers_1.deleteVehiculo);
exports.default = router;
//# sourceMappingURL=vehiculos.routes.js.map