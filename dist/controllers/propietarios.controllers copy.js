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
exports.deletePropietario = exports.putPropietario = exports.postPropietario = exports.getPropietario = exports.getPropietarios = void 0;
var propietario_1 = __importDefault(require("../models/propietario"));
exports.getPropietarios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var propietarios, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, propietario_1.default.findAll()];
            case 1:
                propietarios = _a.sent();
                if (propietarios.length === 0) {
                    res.status(404).json({
                        status: 404,
                        statusMsg: 'Not Found',
                        error: "No existe propietarios creados",
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        statusMsg: 'Succes',
                        data: propietarios,
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(404).json({
                    status: 404,
                    statusMsg: 'Not Found',
                    error: error_1,
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getPropietario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, propietario, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, propietario_1.default.findByPk(id)];
            case 1:
                propietario = _a.sent();
                if (!propietario) {
                    res.status(404).json({
                        status: 404,
                        statusMsg: 'Not Found',
                        error: "No existen propietarios",
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        statusMsg: 'Succes',
                        data: propietario,
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
exports.postPropietario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, existPropietario, propietario, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                body = req.body;
                return [4 /*yield*/, propietario_1.default.findOne({
                        where: {
                            apellido: body.apellido,
                            nombre: body.nombre
                        }
                    })];
            case 1:
                existPropietario = _a.sent();
                if (!existPropietario) return [3 /*break*/, 2];
                res.status(400).json({
                    status: 400,
                    statusMsg: 'Not Found',
                    error: "El propietario ya existe!!"
                });
                return [3 /*break*/, 6];
            case 2: return [4 /*yield*/, propietario_1.default.create({
                    apellido: body.apellido,
                    nombre: body.nombre,
                    dni: body.dni
                })];
            case 3:
                propietario = _a.sent();
                return [4 /*yield*/, propietario];
            case 4: return [4 /*yield*/, (_a.sent()).save()];
            case 5:
                _a.sent();
                res.status(200).json({
                    status: 200,
                    statusMsg: 'Succes',
                    data: propietario,
                });
                _a.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                error_3 = _a.sent();
                res.status(500).json({
                    status: 500,
                    statusMsg: 'Internal server error',
                    error: "El propietario no se pudo crear!",
                });
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.putPropietario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, propietario, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                id = req.params.id;
                body = req.body;
                return [4 /*yield*/, propietario_1.default.findByPk(id)];
            case 1:
                propietario = _a.sent();
                if (!!propietario) return [3 /*break*/, 2];
                res.status(400).json({
                    status: 400,
                    statusMsg: 'Not Found',
                    error: "No existe propietario para actualizar"
                });
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, propietario.update(body)];
            case 3:
                _a.sent();
                res.status(200).json({
                    status: 200,
                    statusMsg: 'Succes',
                    data: propietario,
                });
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_4 = _a.sent();
                res.status(500).json({
                    status: 500,
                    statusMsg: 'Internal server error',
                    error: "El propietario no se pudo actualizar!",
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.deletePropietario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, propietario, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                id = req.params.id;
                return [4 /*yield*/, propietario_1.default.findByPk(id)];
            case 1:
                propietario = _a.sent();
                if (!!propietario) return [3 /*break*/, 2];
                res.status(400).json({
                    status: 400,
                    statusMsg: 'Not Found',
                    error: "No existe propietario para eliminar"
                });
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, propietario.destroy()];
            case 3:
                _a.sent();
                res.status(200).json({
                    status: 200,
                    statusMsg: 'Succes',
                    data: propietario,
                });
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_5 = _a.sent();
                res.status(500).json({
                    status: 500,
                    statusMsg: 'Internal server error',
                    error: "El propietario no se pudo eliminar!",
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=propietarios.controllers copy.js.map