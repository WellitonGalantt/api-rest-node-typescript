import express from "express";
import { router } from "./routes/index";

const server = express();

// Definindo o middleware para tratar o corpo da requisição como json
server.use(express.json());

server.use(router);

export { server };
