"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var vehiculos_controllers_1 = require("../controllers/vehiculos.controllers");
var router = express_1.Router();
router.get('/', vehiculos_controllers_1.getVehiculos);
router.get('/:id', vehiculos_controllers_1.getVehiculo);
router.post('/', vehiculos_controllers_1.postVehiculo);
router.put('/:id', vehiculos_controllers_1.putVehiculo);
router.delete('/:id', vehiculos_controllers_1.deleteVehiculo);
exports.default = router;
//# sourceMappingURL=vehiculos.routes copy.js.map