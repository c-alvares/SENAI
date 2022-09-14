const tabelaDeb = document.querySelector("#tabelaDeb");
const urlListar = "http://localhost:3000/lancamentos";
const urlCadastrar = "http://localhost:3000/lancamentos/cadastrar";

var lancados = [];
var descricao = document.querySelector("#descricao");
var tipo = document.querySelector("#tipo");
var valor = document.querySelector("#valor");
var enviar = document.querySelector("#enviar")


function carregarDados() {
  fetch(urlListar)
    .then((res) => {
      return res.json();
    })
    .then((lancamentos) => {
      lancados = lancamentos;
      listar();
      });
};

function listar() {

  lancados.forEach((lancamento) => {
    if (lancamento.tipo == "D") {
      let linha = document.querySelector("#linha").cloneNode(true);

      let colunas = linha.querySelectorAll("td");

      colunas[0].innerHTML = lancamento.n_lancamento;
      colunas[1].innerHTML = lancamento.day.split("T")[0];
      colunas[2].innerHTML = lancamento.descricao;
      colunas[3].innerHTML = lancamento.valor;
      colunas[4].innerHTML = lancamento.tipo;

      document.querySelector("#corpo").appendChild(linha);

    } else {

      let lina = document.querySelector("#row").cloneNode(true);

      let col = lina.querySelectorAll("td");

      col[0].innerHTML = lancamento.n_lancamento;
      col[1].innerHTML = lancamento.day.split("T")[0];
      col[2].innerHTML = lancamento.descricao;
      col[3].innerHTML = lancamento.valor;
      col[4].innerHTML = lancamento.tipo;

      document.querySelector("#body").appendChild(lina);
    }
  })
}

function abrirModalCadastro() {
  document.querySelector("#telaCadastro").setAttribute("class", "modais");
}

function fecharModalCadastro() {
  document.querySelector("#telaCadastro").setAttribute("class", "modais model");
}

function cadastrar() {
  
}