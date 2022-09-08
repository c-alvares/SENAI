const tabelaD = document.querySelector("#tabelaD");
const tCorpo = document.querySelector("#tCorpo");
const tLinha = document.querySelector("#tLinha");
const nLancamento = document.querySelector("#nLancamento");
const descricao = document.querySelector("#descricao");
const hoje = document.querySelector("#hoje");
const valor = document.querySelector("#valor");
const tipo = document.querySelector("#tipo");

fetch("http://localhost:5500/lancamentos")
.then(res => {return res.json() })
.then(lancamentos => {
    lancamentos.forEach(lancamento => {
        let linha = tLinha.cloneNode(true);

        let colunas = linha.querySelector("td");
        colunas[0].innerHTML =lancamento.n_lancamento;
        colunas[1].innerHTML =lancamento.day;
        colunas[2].innerHTML =lancamento.descricao;
        colunas[3].innerHTML =lancamento.valor;
        colunas[4].innerHTML =lancamento.tipo;
    })
});