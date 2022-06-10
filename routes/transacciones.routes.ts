import { Router } from "express";
import { postTransacciones, getHistorialVehiculoServicio ,getPresupuestoTotal} from "../controllers/transacciones.controllers";

const router = Router();


router.post('/', postTransacciones);
router.get('/:vehiculoId', getHistorialVehiculoServicio);
router.get('/presupuesto/:vehiculoId', getPresupuestoTotal);


export default router;