"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = __importDefault(require("../controllers/usuarioController"));
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuarioController_1.default.lista);
        this.router.get('/:id', usuarioController_1.default.un_usuario);
        this.router.post('/', usuarioController_1.default.create);
        this.router.delete('/:id', usuarioController_1.default.delete);
        this.router.put('/:id', usuarioController_1.default.put);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
