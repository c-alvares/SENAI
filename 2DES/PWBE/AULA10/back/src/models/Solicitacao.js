// Aqui é realizada os comandos a serem executados no DB
const toReadAll = () => {
    return "SELECT * FROM vw_solicitacoes";
}
const toCreate = (model) => {
    return `CALL solicita_um_item(${model.n_sol}, ${model.depto}, ${model.func}, ${model.prod}, ${model.qtd}, ${model.total})`;
}
const toReadFunc = () => {
    return "SELECT * FROM Funcionarios";
}

module.exports = {
    toReadAll,
    toCreate,
    toReadFunc
}