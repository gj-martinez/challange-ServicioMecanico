"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var propietarios_controllers_1 = require("../controllers/propietarios.controllers");
var router = express_1.Router();
router.get('/', propietarios_controllers_1.getPropietarios);
router.get('/:id', propietarios_controllers_1.getPropietario);
router.post('/', propietarios_controllers_1.postPropietario);
router.put('/:id', propietarios_controllers_1.putPropietario);
router.delete('/:id', propietarios_controllers_1.deletePropietario);
exports.default = router;
//# sourceMappingURL=propietarios.routes copy.js.map