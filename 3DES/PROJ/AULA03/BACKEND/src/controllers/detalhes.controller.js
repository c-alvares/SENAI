const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

const readSails = async (req, res) => {
  let sails = await prisma.Vendas.findMany();

  res.status(200).json(sails).end();
};

const detailedSail = async (req, res) => {
  let sails = await prisma.Vendas.findUnique({
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

};
