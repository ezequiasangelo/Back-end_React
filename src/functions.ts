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

  return res.status(201).send("Características Salvas!");
}

export default { adicionarCaracteristicas };