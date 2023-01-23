// Lista todos os entregadores
const listarEntregadores = () => {
    return `SELECT * FROM entregadores`;
}

// Lista o entregador especificado
const listarEntregador = (model) => {
    return `SELECT * FROM entregadores WHERE ID_Entregador = '${model.ID_Entregador}'`; 
}

module.exports = {
    listarEntregadores,
    listarEntregador
}