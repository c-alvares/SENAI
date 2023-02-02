// Lista todos os entregadores
const listarEntregadores = () => {
    return `SELECT * FROM entregadores`;
}

// Lista o entregador especificado
const listarEntregador = (model) => {
    return `SELECT * FROM entregadores WHERE ID_Entregador = '${model.ID_Entregador}'`; 
}

// Compara os dados inseridos com os do DB para Logar entregador
const logarEntregador = (model) => {
    return `SELECT * FROM entregadores WHERE Email = '${model.Email}' AND Senha = '${model.Senha}'`;
}

module.exports = {
    listarEntregadores,
    listarEntregador,
    logarEntregador
}