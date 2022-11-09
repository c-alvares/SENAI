const novaPessoa = (model) => {
    return `INSERT INTO PESSOA VALUES ('${model.nome}','${model.cpf}','${model.Endereco.Id_endereco}');`;
}

const novoEndereco = (model) => {
    return `INSERT INTO ENDERECO VALUES ('${model.Endereco.logradouro}', '${model.Endereco.numero}', '${model.Endereco.cep}', '${model.Endereco.bairro}', '${model.Endereco.cidade}', '${model.Endereco.estado}');`;
}

const novoTelefone = (model) => {
    return `INSERT INTO TELEFONE VALUES ('${model.telefones.numero}', ${model.telefones.ddd}, '${model.telefones.TipoTelefone.Id_tipo}');`;
}

const novaPessoaTelefone = (model) => {
    return `INSERT INTO PESSOATELEFONE VALUES ('${model.Id_pessoa}', '${model.telefones.Id_telefone}');`;
}

const novoTipoTelefone = (model) => {
    return `INSERT INTO TIPOTELEFONE VALUES ('${model.telefones.TipoTelefone.Id_tipo}', '${model.telefones.TipoTelefone.tipo}');`;
}


const verificarCarros = () => {
    return `SELECT p.nome, p.cpf, t.ddd, t.numero, tt.tipo, e.logradouro, e.bairro, e.cep, e.cidade, e.estado, e.numero FROM carros
    FROM pessoaTe`;
}
const verificarUmCarro = (model) => {
    return `SELECT * FROM carros WHERE placa='${model.placa}'`;
}
const buscarPorModelo = (model) => {
    return `SELECT * FROM carros WHERE modelo like '%${model.modelo}%'`;
}


const atualizarPessoa = (model) => {
    return `UPDATE PESSOA SET nome = '${model.nome}' WHERE id = '${model.Id_pessoa}';`;
}

const atualizarEndereco = (model) => {
    return `UPDATE ENDERECO SET 
                logradouro = '${model.logradouro}',
                numero = '${model.numero}',
                cep = '${model.cep}',
                bairro = '${model.bairro}',
                cidade = '${model.cidade}',
                estado = '${model.estado}',
            WHERE id = '${model.Endereco.Id_endereco}'`;
}

const atualizarTelefone = (model) => {
    return `UPDATE TELEFONE SET numero = '${model.telefones.numero}', ddd = '${model.telefones.ddd}' WHERE id = '${model.telefones.Id_telefone}';`;
}

const atualizarTipoTelefone = (model) => {
    return `UPDATE TIPOTELEFONE SET tipo = '${model.telefones.TipoTelefone.tipo}' WHERE id = '${model.telefones.TipoTelefone.Id_tipo}';`;
}


const deletarPessoa = (model) => {
    return `DELETE FROM pessoa WHERE Id_pessoa ='${model.Id_pessoa}';`;
}

module.exports = {
    novaPessoa,
    novoEndereco,
    novoTelefone,
    novaPessoaTelefone,
    novoTipoTelefone,
    atualizarPessoa,
    atualizarEndereco,
    atualizarTelefone,
    atualizarTipoTelefone,
    deletarPessoa
}