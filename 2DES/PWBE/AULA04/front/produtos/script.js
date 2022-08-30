const produtos = document.querySelector('.produtos');
const produto = document.querySelector('.produto');
const modal = document.querySelector('.modal');

fetch('http://localhost:3000/produtos')
.then(resp => { return resp.json()})
.then(produtos => {
        produtos.forEach(produto => {
            duplicarProduto(produto);
        })
    })

function cadastrar() {
    let cod = document.querySelector("#cod").value;
    let nome = document.querySelector("#nnome").value;
    let qntd = document.querySelector("#qntd").value;
    let preco = document.querySelector("#ppreco").value;

    let data = JSON.stringify({
        "cod": cod,
        "nome": nome,
        "qntd": qntd,
        "preco": preco
    });

    fetch("http://localhost:3000/produtos", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": data
    })
    .then(resp => {return resp.json()})
    .then(data => {
        duplicarProduto(data); 
        showModal();
    })
}

function showModal() {
    modal.classList.toggle('model');
}

function duplicarProduto(info) {
    let nPROD = produto.cloneNode(true);

    nPROD.classList.remove('model');

    nPROD.querySelector('#nome').innerHTML = info.nome;
    nPROD.querySelector('#preco').innerHTML = "R$ " + info.preco;

    produtos.appendChild(nPROD);
}