import express from "express";
import './shared/services/translationsYup';
import { router } from "./routes/index";

const server = express();

// Definindo para tratar o corpo da requisição como json
server.use(express.json());

server.use(router);

export { server };
