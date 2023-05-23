import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Função para adicionar características ao Cavalo
async function adicionarCaracteristicas(req: any, res: any) {
  const { nome_cientifico, descricao, domestico, idade_vive } =
    req.body;
    

  const novocavalo = await prisma.cavalo.create({
    data: {
        nome_cientifico,
        descricao,
        domestico,
        idade_vive
    }
    
  });

  return res.status(201).send("update successfully saved!");
}

// Listar as caracteristicas
async function listarCaracteristicas() {
  const listarCavalo = await prisma.cavalo.findMany();

  return listarCavalo;
}



export default { adicionarCaracteristicas, listarCaracteristicas, };