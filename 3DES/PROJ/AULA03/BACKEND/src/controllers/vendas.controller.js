const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

const createSails = async (req, res) => {
  let sails = await prisma.Vendas.create({
    data: {
      id: req.body.id
    }
  });
  // console.log(sails)
  let info = req.body.detalhe;
  info.forEach(i => {
    i.id = parseInt(sails.id)
  });

  let details = await prisma.detalhes.createMany({
    data: info
  });
  res.status(201).json(details).end();

}

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
  createSails,
  readSails,
  detailedSail,
};
