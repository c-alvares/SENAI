const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

// async function main() {
//     let includeDetails: boolean = false
//     let detail: Prisma.UserCreateInput

//     if (includeDetails) {
//         details = {
//             data: now(),
//             id_vendedor: ,
//             detalhe: {
//                 create: {
//                     id_produto: ,
//                     quantidade: ,
//                 },
//             },
//         }
//     } else {
//         details = {
//             data: now(),
//             id_vendedor: ,
//         }
//     }
//     const createSail = await prisma.Vendas.create({ data: details })
// }

// main()
//     .then(async () => {
//         await prisma.$disconnect()
// })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })

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
  // createSail,
  readSails,
  detailedSail,
};
