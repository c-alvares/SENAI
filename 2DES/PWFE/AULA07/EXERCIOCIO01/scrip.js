var cadastrado = [
    { 
        "usuario":"user",
        "senha":"qwerty"
    },
    { 
        "usuario":"senai",
        "senha":"dev123"
    },
    {
        "usuario":"devop",
        "senha":"senai2018"
    }
];

var produtos = [
    {
        "imagem":"src=",
        "nomeProduto":"marguerita",
        "preco":"R$ ,00"
    },
    {
        "imagem":"",
        "nomeProduto":"",
        "preco":"R$ ,00"
    },
    {
        "imagem":"",
        "nomeProduto":"",
        "preco":"R$ ,00"
    },
    {
        "imagem":"",
        "nomeProduto":"",
        "preco":"R$ ,00"
    }    
];

var telaLogin = document.querySelector("#telaLogin");
var opcaoPizza = document.querySelector("#paginaPizza");

var achou = false;

function logar() {
    cadastrado.forEach(userInfo => {
        
        let user = document.querySelector("#user").value;
        let password = document.querySelector("#psd").value;

        if (user == userInfo.usuario && password == userInfo.senha) {
            achou = true;
        }

    })
    if (achou != true) {
        alert("Usuário não cadastrado ou senha incorreta");
    } else {
        window.location.href='./home.html'
    }

}

function carregarPagina() {
    produtos.forEach(pizza => {
        let cardPizza = opcaoPizza.cloneNode(true);
        
        cardPizza.querySelector().innerHTML = pizza.
        cardPizza.querySelector().innerHTML = pizza.nomeProduto;
        cardPizza.querySelector().innerHTML = pizza.preco;
    })
}

// var tecla = "";
// var acao = "";

// document.querySelector("#psd").addEventListener("keyup", (act) => {
//     tecla += act.key;
//     acao += "*";
//     act.target.value = acao;
// })