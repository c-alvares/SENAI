const create = (dados) => {
    return `INSERT INTO cadastrados VALUES ('${dados.login}', '${dados.nome}', '${dados.nascimento}', '${dados.telefone}', '${dados.tipo}', '${dados.LOAD_FILE}')`;
}