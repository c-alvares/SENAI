const criar = (model) => {
    return `INSERT INTO tratamentos VALUES (DEFAULT, ${model.id_consulta},'${model.tratamento}',${model.valor})`;
}

const ler = () => {
    return "SELECT * FROM tratamentos";
}

const atualizar = (model) => {
    return `UPDATE tratamentos SET 
                tratamento = '${model.tratamento}',
                valor = ${model.valor}
                WHERE id = ${model.id}`;
}

const excluir = (model) => {
    return `DELETE FROM tratamentos WHERE id= ${model.id}`;
}

module.exports = {
    criar,
    ler,
    atualizar,
    excluir
}