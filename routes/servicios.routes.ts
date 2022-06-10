import { Router } from "express";
import {  getServicio, getServicios, postServicio, putServicio,deleteServicio } from "../controllers/servicios.controllers";
import { body }from 'express-validator';

const router = Router();

router.get('/', getServicios);
router.get('/:id', getServicio);
router.post('/',[
    body('costo').isNumeric()
], postServicio);
router.put('/:id', putServicio);
router.delete('/:id', deleteServicio);

export default router;