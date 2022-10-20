"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postsControllers_1 = __importDefault(require("../controllers/postsControllers"));
class PostRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', postsControllers_1.default.lista);
        this.router.get('/:id', postsControllers_1.default.un_post);
        this.router.post('/', postsControllers_1.default.create);
        this.router.delete('/:id', postsControllers_1.default.delete);
        this.router.put('/:id', postsControllers_1.default.put);
    }
}
const postRoutes = new PostRoutes();
exports.default = postRoutes.router;
