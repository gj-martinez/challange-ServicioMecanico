import { Router } from "express";
import { deleteVehiculo, getVehiculo, getVehiculos, postVehiculo, putVehiculo } from "../controllers/vehiculos.controllers";
import { body }from 'express-validator';

const router = Router();

router.get('/', getVehiculos);
router.get('/:id', getVehiculo);
router.post('/', [
        body('marca').isAlpha(),
        body('color').isAlpha(),
        body('año').isDate()
    ],postVehiculo);
router.put('/:id', putVehiculo);
router.delete('/:id', deleteVehiculo);

export default router;