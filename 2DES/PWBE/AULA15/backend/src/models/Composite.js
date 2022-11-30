const Profissional = require('./profissionais.model');
const Consulta = require('./consultas.model');
const Tratamento = require('./tratamentos.model');

const profissional = (lista) => {
    let consultas = [];
    let i = 0;
    let id_consulta = lista[i].id_consulta;
    consultas.push(new Consulta(lista[i]));
    lista.forEach(e => {
        if(id_consulta != e.id_consulta) {
            id_consulta = e.id_consulta;
            consultas.push(new Consulta(e));
            i++;
            consultas[i].addTratamento(new Tratamento(e));
        } else{
            consultas[i].addTratamento(new Tratamento(e));
        }
    });
    const prof = lista[i];
    prof.consultas = consultas;
    return new Profissional(prof);
}

module.exports = {
    profissional
};