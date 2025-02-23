"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
const server = (0, express_1.default)();
exports.server = server;
// Definindo o middleware para tratar o corpo da requisição como json
server.use(express_1.default.json());
server.use(index_1.router);
