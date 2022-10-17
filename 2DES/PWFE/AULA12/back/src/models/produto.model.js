const create = (model) => {
    return `INSERT INTO produtos VALUES(${model.cod_produto},'${model.nome_produto}')`;
}

const readAll = () => {
    return `SELECT * FROM produtos`;
}

const readNome = (model) => {
    return `SELECT * FROM vw_produtos_depto WHERE nome_produto LIKE '%${model.nome_produto}%'`;
}

const erase = (model) => {
    return `DELETE FROM produtos WHERE cod_produto = ${model.cod_produto}`;
}

module.exports = {
    create,
    readAll,
    readNome,
    erase
}