const criar = (model) => {
    return `INSERT INTO tratamentos VALUES ('${model.placa}','${model.modelo}','${model.cor}','${model.cpf}')`;
}

const ler = () => {
    return "SELECT * FROM tratamentos";
}

const atualizar = (model) => {
    return `UPDATE tratamentos SET 
                placa = '${model.placa}',
                modelo = '${model.modelo}',
                cor = '${model.cor}',
                cpf = '${model.cpf}'
                WHERE placa = '${model.placa}'`;
}

const excluir = (model) => {
    return `DELETE FROM tratamentos WHERE placa='${model.placa}'`;
}

module.exports = {
    criar,
    ler,
    atualizar,
    excluir
}