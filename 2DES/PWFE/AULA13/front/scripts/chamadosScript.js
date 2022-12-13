let linhaChamado = document.querySelector('.linhaChamado');
let tBody = document.querySelector('.corpo');

function carregarChamados() {
    const options = {method: 'GET'};

fetch('http://localhost:3000/read', options)
  .then(response => response.json())
  .then(response => {
    // console.log(response)
    response.forEach(chamado => {
        console.log(chamado)
        linhaChamado.cloneNode(true)
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
        // linhaChamado.querySelector('#buttons0')
        tBody.appendChild(linhaChamado)
    })
  })


  .catch(err => console.error(err));
}
