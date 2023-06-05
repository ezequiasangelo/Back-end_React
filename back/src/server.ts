import Fastify from  'fastify';
import functions from "./functions"



const server = Fastify();


server.get("/", (req, res) => {
    return `Você pode usar as rotas:
     /adicionar
     /listar`;
  });
  
server.post('/adicionar', functions.adicionarCaracteristicas);

server.get("/listar", functions.listarCaracteristicas);

server.get("/buscar/:q", functions.buscaCaracteristicas);

server.put("/editar/:id", functions.editarCaracteristicas);

server.delete("/delete/:id", functions.deleteCaracteristicas)

server.listen({ port: 3000}, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    } else {
        console.log(`Servidor rodando em ${address}`);
    }
});
