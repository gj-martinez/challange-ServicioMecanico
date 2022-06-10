"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var servicios_controllers_1 = require("../controllers/servicios.controllers");
var express_validator_1 = require("express-validator");
var router = express_1.Router();
router.get('/', servicios_controllers_1.getServicios);
router.get('/:id', servicios_controllers_1.getServicio);
router.post('/', [
    express_validator_1.body('costo').isNumeric()
], servicios_controllers_1.postServicio);
router.put('/:id', servicios_controllers_1.putServicio);
router.delete('/:id', servicios_controllers_1.deleteServicio);
exports.default = router;
//# sourceMappingURL=servicios.routes.js.map