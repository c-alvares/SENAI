const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

const createDetails = async (req, res) => {
  let details = await prisma.Detalhes.createMany({
    data: req.body
  });

  res.status(201).json(details).end()
}

const readDetails = async (req, res) => {
  let details = await prisma.Detalhes.findMany();

  res.status(200).json(details).end();
};

const detailedSail = async (req, res) => {
  let details = await prisma.Detalhes.findUnique({
    where: {
      id: Number(req.params.id),
    },
    select: {
      id: true,
      data: true,
      detalhes: true,
    },
  });
  //SELECT nome, setor, comissao FROM Vendas INNER JOIN Produtos ON Vendas.id = Produtos.setor WHERE Vendas.id = ...

  res.status(200).json(sails).end();
};

module.exports = {
  createDetails,
  readDetails,
  
};
