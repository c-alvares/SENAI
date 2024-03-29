const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createProduct = async (req, res) => {
  let products = await prisma.Produtos.create({
    data: req.body,
  });

  res.status(201).json(products).end();
};

const readProducts = async (req, res) => {
  let products = await prisma.Produtos.findMany();

  res.status(200).json(products).end();
};

const readProduct = async (req, res) => {
  let products = await prisma.Produtos.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });

  res.status(200).json(products).end();
};

module.exports = {
  createProduct,
  readProducts,
  readProduct,
};
