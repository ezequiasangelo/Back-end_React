import Fastify from  'fastify';
import functions from "./functions"

const server = Fastify();

server.get('/', (request, reply) => {
    return "Servidor Exemplo on line...";

});

server.post('/adicionar', functions.adicionarCaracteristicas);

server.listen({ port: 3000}, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    } else {
        console.log(`Servidor rodando em ${address}`);
    }
});
