var urlListar = `http://localhost:3000/usuarios`;
var urlCadastrar = `http://localhost:3000/usuarios/cadastrar`;
var usuarios = [];

const btCadastrar = document.querySelector("#btCadastrar");
const corpoTabela = document.querySelector(".corpoTabela");

function dadosClientes() {
    fetch(urlListar)
    .then(res => {
        return res.json()
    })
    .then(users => {
        usuarios = users;
        inserirDadosC();
    });
};

function inserirDadosC() {

    corpoTabela.innerHTML = "";

    usuarios.forEach((usuario) => {
        let tr = document.createElement("tr");
        let codigo = document.createElement("td");
        let nome = document.createElement("td");
        let endereco = document.createElement("td");
        let telefone = document.createElement("td");

        codigo.innerHTML = usuario.codigo_cli;
        nome.innerHTML = usuario.nome;
        endereco.innerHTML = usuario.endereco;
        telefone.innerHTML = usuario.telefone;

        tr.appendChild(codigo);
        tr.appendChild(nome);
        tr.appendChild(endereco);
        tr.appendChild(telefone);

        corpoTabela.appendChild(tr);
    })
};

function novoCliente() {
    btCadastrar.addEventListener("click",  )
};