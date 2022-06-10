import { Router } from "express";
import { deletePropietario, getPropietario, getPropietarios, postPropietario, putPropietario } from "../controllers/propietarios.controllers";
import { body }from 'express-validator';

const router = Router();

router.get('/', getPropietarios);
router.get('/:id', getPropietario);

router.post('/',[
    body('apellido').isAlpha(),
    body('nombre').isAlpha(),
    body('dni').isNumeric()
                .isLength({max:8})
    ],postPropietario);

router.put('/:id', putPropietario);
router.delete('/:id', deletePropietario);

export default router;