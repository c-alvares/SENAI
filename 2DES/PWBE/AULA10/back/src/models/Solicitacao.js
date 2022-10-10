// Aqui são criados os comandos à serem executados no DB
const toReadAll = () => {
    return "SELECT * FROM vw_solicitacoes";
}
const toCreate = (model) => {
    return `CALL solicita_um_item(${model.n_sol}, ${model.depto}, ${model.func}, ${model.prod}, ${model.qtd}, ${model.total})`;
}


const toReadDepartment = (model) => {
    return "SELECT * FROM Departamentos";
}
const newDepartment = (model) => {
    return `INSERT INTO Departamentos VALUES(${model.Cod_Depto}, '${model.Nome_Depto}')`;
}
const deleteDepartment = (model) => {
    return `DELETE FROM Departamentos WHERE Cod_Depto = '${model.Cod_Depto}'`;
}


const toReadProduct = (model) => {
    return "SELECT * FROM Produtos";
}
const toGetProductByName = (model) => {
    return `SELECT p.Nome_produto, d.Nome_Depto FROM Produtos p
    INNER JOIN Itens_Solicitacao i on p.Cod_Produto = i.Cod_Produto
    INNER JOIN Solicitacoes s on s.Num_Sol = i.Num_Sol
    INNER JOIN Departamentos d on d.Cod_Depto = s.Cod_Depto
    WHERE p.Nome_produto = '${model.Nome_produto}'`;
}
const newProduct = (model) => {
    return `INSERT INTO Produtos VALUES(${model.Cod_Produto}, '${model.Nome_produto}')`;
}


const toCreateFunc = (model) => {
    return `INSERT INTO Funcionarios VALUES(${model.Cod_Func}, '${model.Nome_Func}', '${model.Sexo}', '${model.Cidade}', '${model.Estado}')`;
}
const toReadFunc = () => {
    return "SELECT * FROM Funcionarios";
}
const getEmployee = (model) => {
    return `SELECT * FROM Funcionarios WHERE Nome_Func LIKE '%${model.Nome_Func}%'`;
}

// const getEmployee = (model) => {
//     return `DELETE FROM Funcionarios WHERE Cod_Func = '${model.Cod_Func}'`;
// }

module.exports = {
    toReadAll,
    toCreate,
    toReadDepartment,
    newDepartment,
    deleteDepartment,
    toReadProduct,
    toGetProductByName,
    newProduct,
    toCreateFunc,
    toReadFunc,
    getEmployee,
}