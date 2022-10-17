const create = (model) => {
    return `INSERT INTO departamentos VALUES(${model.cod_depto},'${model.nome_depto}')`;
}

const readAll = () => {
    return `SELECT * FROM departamentos`;
}

const del = (model) => {
    return `DELETE FROM departamentos WHERE cod_depto = ${model.cod_depto}`;
}

module.exports = {
    create,
    readAll,
    del
}