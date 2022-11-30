const criar = (model) => {
    return `INSERT INTO tratamentos VALUES (DEFAULT, ${model.id_consulta},'${model.tratamento}',${model.valor})`;
}

const ler = () => {
    return "SELECT * FROM tratamentos";
}

const atualizar = (model) => {
    return `UPDATE tratamentos SET
                id_consulta = ${model.id_consulta}, 
                tratamento = '${model.tratamento}',
                valor = ${model.valor}
                WHERE id = ${model.id}`;
}

const excluir = (id) => {
    return `DELETE FROM tratamentos WHERE id= ${id}`;
}

module.exports = {
    criar,
    ler,
    atualizar,
    excluir
}