"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var propietarios_controllers_1 = require("../controllers/propietarios.controllers");
var express_validator_1 = require("express-validator");
var router = express_1.Router();
router.get('/', propietarios_controllers_1.getPropietarios);
router.get('/:id', propietarios_controllers_1.getPropietario);
router.post('/', [
    express_validator_1.body('apellido').isAlpha(),
    express_validator_1.body('nombre').isAlpha(),
    express_validator_1.body('dni').isNumeric()
        .isLength({ max: 8 })
], propietarios_controllers_1.postPropietario);
router.put('/:id', propietarios_controllers_1.putPropietario);
router.delete('/:id', propietarios_controllers_1.deletePropietario);
exports.default = router;
//# sourceMappingURL=propietarios.routes.js.map