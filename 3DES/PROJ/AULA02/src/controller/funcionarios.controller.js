const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body;

    info.nascimento = new Date(req.body.nascimento);

    const funcionario = await prisma.funcionario.create({
        data: info
    });

    res.status(200).json(funcionario).end();
}

const read = async (req, res) => {
    const funcionarios = await prisma.funcionario.findMany();

    res.status(200).json(funcionarios).end();
}

const update = (req, res) => {
    res.status(200).send("Update").end();
}

const remove = (req, res) => {
    res.status(200).send("Delete").end();
}

module.exports = {
    create,
    read,
    update,
    remove
}