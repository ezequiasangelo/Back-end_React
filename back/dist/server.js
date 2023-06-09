"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
// import functions from "./functions"
const server = (0, fastify_1.default)();
server.get('/', (request, reply) => {
    return "Servidor Exemplo on line...";
});
// server.post('/adicionar', functions.adicionarCaracteristicas);
server.listen({ port: 3000 }, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    else {
        console.log(`Servidor rodando em ${address}`);
    }
});
