"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPresupuestoTotal = exports.getHistorialVehiculoServicio = exports.postTransacciones = void 0;
var vehiculo_1 = __importDefault(require("../models/vehiculo"));
var servicio_1 = __importDefault(require("../models/servicio"));
var asociaciones_1 = require("../models/asociaciones");
exports.postTransacciones = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, car, vehiculo, service, servicio, transaccion, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                body = req.body;
                return [4 /*yield*/, vehiculo_1.default.findByPk(body.vehiculoId)];
            case 1:
                car = _a.sent();
                vehiculo = JSON.parse(JSON.stringify(car));
                return [4 /*yield*/, servicio_1.default.findByPk(body.servicioId)];
            case 2:
                service = _a.sent();
                servicio = JSON.parse(JSON.stringify(service));
                if (!((vehiculo.color.toLowerCase() === "Gris".toLocaleLowerCase()) && servicio.nombre.toLowerCase() === "Pintura".toLocaleLowerCase())) return [3 /*break*/, 3];
                return [2 /*return*/, res.status(404).json({
                        status: 404,
                        statusMsg: 'Not Found',
                        error: "Por politica del taller no permite pintar autos de color gris!!",
                    })];
            case 3: return [4 /*yield*/, asociaciones_1.Transacciones.create({
                    VehiculoId: body.vehiculoId,
                    ServicioId: body.servicioId,
                })];
            case 4:
                transaccion = _a.sent();
                res.status(200).json({
                    status: 200,
                    statusMsg: 'Succes',
                    data: transaccion,
                });
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                res.status(500).json({
                    status: 500,
                    statusMsg: 'Internal server error',
                    error: "El vehiculo no se puedo crear!",
                });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getHistorialVehiculoServicio = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var vehiculoId, transaccion, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                vehiculoId = req.params.vehiculoId;
                return [4 /*yield*/, vehiculo_1.default.findOne({
                        where: { id: vehiculoId },
                        include: servicio_1.default
                    })];
            case 1:
                transaccion = _a.sent();
                if (!transaccion) {
                    res.status(404).json({
                        status: 404,
                        statusMsg: 'Not Found',
                        error: "No existe transaccion",
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        statusMsg: 'Succes',
                        data: transaccion,
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(404).json({
                    status: 404,
                    statusMsg: 'Not Found',
                    error: error_2,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getPresupuestoTotal = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var vehiculoId, presupuesto, vehiculo, presupuestoTotal, _i, _a, val, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                vehiculoId = req.params.vehiculoId;
                return [4 /*yield*/, vehiculo_1.default.findOne({
                        where: { id: vehiculoId },
                        include: servicio_1.default
                    })];
            case 1:
                presupuesto = _b.sent();
                if (!presupuesto) {
                    res.status(404).json({
                        status: 404,
                        statusMsg: 'Not Found',
                        error: "No existe transaccion",
                    });
                }
                else {
                    vehiculo = JSON.parse(JSON.stringify(presupuesto));
                    presupuestoTotal = 0;
                    for (_i = 0, _a = vehiculo.Servicios; _i < _a.length; _i++) {
                        val = _a[_i];
                        presupuestoTotal += val.costo;
                    }
                    res.status(200).json({
                        status: 200,
                        statusMsg: 'Succes',
                        data: "presupuesto total es:" + presupuestoTotal,
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                res.status(404).json({
                    status: 404,
                    statusMsg: 'Not Found',
                    error: error_3,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=transacciones.controllers.js.map