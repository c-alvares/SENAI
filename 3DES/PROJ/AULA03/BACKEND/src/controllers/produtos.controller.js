const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createProduct = async (req, res) => {
    let product = await prisma.Produtos.create({
        data: req.body
    });

    res.status(200).json(product).end();
}

const readProducts = async (req, res) => {
    let products = await prisma.Produtos.findMany();

    res.status(200).json(products).end();
}

const readProduct = async (req, res) => {
    let products = await prisma.Produto.findUnique({
        where: {
            id_produtos: Number(req.params.id_produtos)
        }
    })

    res.status(200).json(products).end();
}

module.exports = {
    createProduct,
    readProducts,
    readProduct,
}