import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Função para adicionar características ao Cavalo
async function adicionarCaracteristicas(req: any, res: any) {
  const { nome_cientifico, descricao, domestico, idade_vive, } =
    req.body;
    

  const novocavalo = await prisma.cavalo.create({
    data: {
        nome_cientifico,
        descricao,
        domestico,
        idade_vive,
    }
    
  });

  return res.status(201).send("update successfully saved!");
}

// Listar as caracteristicas
async function listarCaracteristicas() {
  const listarCavalo = await prisma.cavalo.findMany();

  return listarCavalo;
}


// Buscar as caracteristicas
async function buscaCaracteristicas(req: any, res: any) {

  const { q, query } = req.params;

  if (typeof q !== "string" ) {
    throw new Error(res.send("Busca Inválida"));
  }
  const buscaCavalo = await prisma.cavalo.findMany({
    where: {
      OR: [
        {
          nome_cientifico: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          descricao: {
            contains: q,
            mode: "insensitive",
          },
        },
        
      ],
    },
  });

  return res.send(buscaCavalo);
}


// Editar as caracteristicas
async function editarCaracteristicas(req: any, res: any) {
  const { id } = req.params;
  const {  nome_cientifico, descricao, domestico, idade_vive, } = req.body;

  
  const editarCavalo = await prisma.cavalo.update({
    where: {
      id: Number(id),
    },
    data: {
      nome_cientifico: nome_cientifico,
      descricao: descricao,
      domestico: domestico,
      idade_vive: idade_vive,
    },
  });

  return res.status(205).send("update successfully saved!!");
}

async function deleteCaracteristicas(req: any, res: any)  {
  const { id } = req.params;


  const deleteCavalo = await prisma.cavalo.delete({
    where: {
      id: Number(id),
    },
    
  });
  
  return res.status(205).send("Delete successfully saved!!");

}




export default { adicionarCaracteristicas, listarCaracteristicas, buscaCaracteristicas, 
editarCaracteristicas, deleteCaracteristicas,};