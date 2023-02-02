const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createSailsman = async (req, res) => {
    let sailsman = await prisma.Vendedor.create({
        data: req.body
    });

    res.status(200).json(sailsman).end();
}

const readSailsmens = async (req, res) => {
    let sailsman = await prisma.Vendedor.findMany();

    res.status(200).json(sailsman).end();
}

const readSailsman = async (req, res) => {
    let sailsman = await prisma.Vendedor.findUnique({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(sailsman).end();
}

module.exports = {
    createSailsman,
    readSailsmens,
    readSailsman,
}