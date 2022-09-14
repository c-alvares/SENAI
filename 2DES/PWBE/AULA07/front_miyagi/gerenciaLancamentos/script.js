const tabelaDeb = document.querySelector("#tabelaDeb");
const nLancamento = document.querySelector("#nLancamento");
const hoje = document.querySelector("#hoje");
const descricao = document.querySelector("#descricao");
const valor = document.querySelector("#valor");
const tipo = document.querySelector("#tipo");

fetch("http://localhost:3000/lancamentos")
  .then((res) => {
    return res.json();
  })
  .then((lancamentos) => {
    lancamentos.forEach((lancamento) => {
      if (lancamento.tipo == "D") {
        let linha = document.querySelector("#Linha").cloneNode(true);

        let colunas = linha.querySelectorAll("td");
        colunas[0].innerHTML = lancamento.n_lancamento;
        colunas[1].innerHTML = lancamento.day;
        colunas[2].innerHTML = lancamento.descricao;
        colunas[3].innerHTML = lancamento.valor;
        colunas[4].innerHTML = lancamento.tipo;

        document.querySelector("#Corpo").appendChild(linha);
      } else {
        let lina = document.querySelector("#row").cloneNode(true);

        let col = lina.querySelectorAll("td");
        lina.querySelector("#nuLancamento").innerHTML = lancamento.n_lancamento;
        lina.querySelector("#amanha").innerHTML = lancamento.day;
        lina.querySelector("#descricoes").innerHTML = lancamento.descricao;
        lina.querySelector("#valores").innerHTML = lancamento.valor;
        lina.querySelector("#tipos").innerHTML = lancamento.tipo;

        document.querySelector("#body").appendChild(lina);
      }
    });
  });

function cadastro() {
    
}