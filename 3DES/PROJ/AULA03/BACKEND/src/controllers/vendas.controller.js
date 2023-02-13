const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createSails = async (req, res) => {
  let sails = await prisma.Vendas.create({
    data: {
      id_vendedor: req.body.id_vendedor,
    },
  });
  // console.log(sails)
  let info = req.body.detalhe;
  info.forEach(i => {
    i.id_venda = parseInt(sails.id);
  });

  let details = await prisma.Detalhes.createMany({
    data: info,
  });
  res.status(201).json(details).end();
};

const readSails = async (req, res) => {
  let sails = await prisma.Vendas.findMany({
    select: {
      id: true,
      data: true,
      id_vendedor: true,
      detalhe: true,
    },
  });
  res.status(200).json(sails).end();
};

const detailedSail = async (req, res) => {
  let sails = await prisma.Vendas.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });

  res.status(200).json(sails).end();
};

const deleteSail = async (req, res) => {
  const sails = await prisma.Vendas.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.status(200).json(sails).end();
};

module.exports = {
  createSails,
  readSails,
  detailedSail,
  deleteSail
};
