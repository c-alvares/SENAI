class Consulta {

    tratamentos = [];

    constructor(data) {
        this.id = data.id_consulta;
        this.paciente = data.paciente;
        this.data = data.data;
        this.horario = data.horario;
        this.id_profissional = data.id_profissional;
        if (data.tratamentos != undefined)
            data.tratamentos.forEach(e => {
                this.tratamentos.push(e);
            });
    }

    addTratamento(trat){
        this.tratamentos.push(trat);
    }

    static read(){
        return "SELECT * FROM consultas";
    }
}

module.exports = Consulta;