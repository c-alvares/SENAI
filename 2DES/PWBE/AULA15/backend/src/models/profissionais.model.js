const read = () => {
    return "SELECT * FROM profissionais";
}

const dadosTratamento = (id) => {
    return `SELECT * FROM vw_dentistas WHERE id = ${id}`;
}

module.exports = {
    read,
    dadosTratamento
}