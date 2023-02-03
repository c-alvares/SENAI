const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createSector = async (req, res) => {
  let sector = await prisma.Setor.create({
    data: req.body,
  });

  res.status(200).json(sector).end();
};

const createSectors = async (req, res) => {
  let sector = await prisma.Setor.createMany({
    data: req.body,
    skipDuplicates: true,
  });

  res.status(200).json(sector).end();
}


const readSectors = async (req, res) => {
  let sector = await prisma.Setor.findMany();

  res.status(200).json(sector).end();
};

const readSector = async (req, res) => {
  let sector = await prisma.Setor.findUnique({
    where: {
      id: Number(req.params.id),
    },
    select: {
        nome: true,
        comissao: true,
        produto: true
    }
  });
  //SELECT nome, setor, comissao FROM Setor INNER JOIN Produtos ON Setor.id = Produtos.setor WHERE Setor.id = ...

  res.status(200).json(sector).end();
};

const readSectorSailsman = async (req, res) => {
  let sector = await prisma.Setor.findUnique({
    where: {
      id: Number(req.params.id),
    },
    select: {
        nome: true,
        comissao: true,
        vendedor: true
    }
  });
  //SELECT nome, setor, comissao FROM Setor INNER JOIN Produtos ON Setor.id = Produtos.setor WHERE Setor.id = ...

  res.status(200).json(sector).end();
};

module.exports = {
  createSector,
  createSectors,
  readSectors,
  readSector,
  readSectorSailsman
};
