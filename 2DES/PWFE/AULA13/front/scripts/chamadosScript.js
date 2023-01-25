
let tBody = document.querySelector('.corpo');

let btAbrirModal = document.querySelector('#btAbrirModal');
let modalCriarChamado = document.querySelector('.modalCriarChamado');
let btFecharCriar = document.querySelector('.btFechar');

var radiosTipo;
var radiosSeveridade;
var radiosDestino;
let descricaoCriar = document.querySelector('#descricao');

let btAlterar = document.querySelector('#btAlterar');
let modalAlterarChamado = document.querySelector('.modalAlterarChamado');
let btFecharAlterar = document.querySelector('#btFecharAlterar');

let btDeletar = document.querySelector('#btDeletar');
let id0 = document.querySelector('#id0');


// Função para listar chamados no corpo da página
function carregarChamados() {
    const options = {method: 'GET'};

fetch('http://localhost:3000/read', options)
  .then(response => response.json())
  .then(response => {

    response.forEach(chamado => {
        let linhaChamado = document.querySelector('.linhaChamado').cloneNode(true)

        linhaChamado.classList.remove('modal0')
        linhaChamado.querySelector('#id0').innerHTML = chamado.id
        linhaChamado.querySelector('#tipo0').innerHTML = chamado.tipo
        linhaChamado.querySelector('#severidade0').innerHTML = chamado.severidade
        linhaChamado.querySelector('#descricao0').innerHTML = chamado.descricao
        linhaChamado.querySelector('#data0').innerHTML = chamado.data
        linhaChamado.querySelector('#hora0').innerHTML = chamado.hora
        linhaChamado.querySelector('#hora_inicio0').innerHTML = chamado.hora_inicio
        linhaChamado.querySelector('#hora_fim0').innerHTML = chamado.hora_fim
        linhaChamado.querySelector('#destino0').innerHTML = chamado.destino

        tBody.appendChild(linhaChamado)
    })
  })
  .catch(err => console.error(err));
}


// Abre modal de criação de chamados
btAbrirModal.addEventListener('click', () => {
  modalCriarChamado.classList.remove('modal1')
})

// Fecha modal de criação de chamados / alteração de chamados
btFecharCriar.addEventListener('click', () => {
  modalCriarChamado.classList.add('modal1')
})


//Abrir modal de alteração de chamados
btAlterar.addEventListener('click', () => {
  modalAlterarChamado.classList.remove('modal2')
})

// Fecha modal de alteração de chamados
btFecharAlterar.addEventListener('click', () => {
  modalAlterarChamado.classList.add('modal2')
})


// Função para criar chamados
document.querySelector("#btCriar").onclick = function() {

  var radios1 = document.getElementsByName("tipo");
  var radios2 = document.getElementsByName("severidade");
  var radios3 = document.getElementsByName("destino");

  for (var i = 0; i < radios1.length; i++) {
      if (radios1[i].checked) {
        radiosTipo = radios1[i].value;
      }
  }

  for (var i = 0; i < radios2.length; i++) {
      if (radios2[i].checked) {
        radiosSeveridade = radios2[i].value;
      }
  }

  for (var i = 0; i < radios3.length; i++) {
      if (radios3[i].checked) {
        radiosDestino = radios3[i].value;
      }
  }

  let dadosChamado = {
    "tipo": radiosTipo,
    "severidade": radiosSeveridade,
    "descricao": descricaoCriar.value,
    "data": "",
    "destino": radiosDestino
  }

  const options = {
    'method': 'POST',
    'headers': {'Content-Type': 'application/json'},
    'body': JSON.stringify(dadosChamado)
  };
  
  fetch('http://localhost:3000/create', options)
    .then(response => response.status)
    .then(response => {
      if (response == 201) {
        alert("Resposta publicada com sucesso")
        window.location.reload()
      }else {
        alert('Falha ao publicar resposta')
      }
    })
    .catch(err => console.error(err));

};

// Função para alterar chamados
// function alterarChamado() {

//   let dadosChamado = {
//     "tipo": radiosTipo,
//     "severidade": radiosSeveridade,
//     "descricao": descricaoCriar.value,
//     "data": "",
//     "destino": radiosDestino
//   }

//   const options = {
//     'method': 'PUT',
//     'headers': {'Content-Type': 'application/json'},
//     'body': JSON.stringify(dadosChamado)
//   };

//   fetch('http://localhost:3000/update', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
// }

// Função para deletar chamados
function deletarChamado(e) {
  let id1 = e.parentNode.querySelector('#id0').innerHTML
  // let uri = 'http://localhost:3000/delete/' + id0;
  console.log(id1);
  // const options = {method: 'DELETE'};

  // fetch(uri, options)
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.error(err));
}