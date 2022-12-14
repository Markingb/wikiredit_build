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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PostController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield database_1.default.query('SELECT * FROM posts');
            res.json(posts);
        });
    }
    un_post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const posts_ = yield database_1.default.query('SELECT * FROM posts WHERE id_post = ?', [id]);
            console.log(posts_);
            res.json(posts_);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO posts set ?', [req.body]);
            res.json({ text: 'Se ha creado el postt' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM posts WHERE id_post = ?', [id]);
            res.json({ text: 'Post eliminado' });
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE posts set ? WHERE id_post = ?', [req.body, id]);
            res.json({ text: 'Post actualizado ' + req.params.id });
        });
    }
}
const postController = new PostController();
exports.default = postController;
