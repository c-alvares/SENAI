const read = () => {
    return "SELECT * FROM profissionais";
}

const dadosTratamento = (id) => {
    return `SELECT * FROM vw_dentista WHERE id = ${id}`;
}

module.exports = {
    read,
    dadosTratamento

}