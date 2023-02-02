const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createSector = async (req, res) => {
    let sector = await prisma.Setor.create({
        data: req.body
    });

    res.status(200).json(sector).end();
}

const readSectors = async (req, res) => {
    let sector = await prisma.Setor.findMany();

    res.status(200).json(sector).end();
}

const readSector = async (req, res) => {
    let sector = await prisma.Setor.findUnique({
        where: {
            id_setor: Number(req.params.id_setor)
        }
    })

    res.status(200).json(sector).end();
}

module.exports = {
    createSector,
    readSectors,
    readSector
}