var urlClientes = `http://localhost:3000/duplicatas/clientes`;
var clientes = [];
const modais = document.querySelector("#modais");
const modalPhone = document.querySelector("#modalPhone");
const telefones = document.querySelector("#tabelaPhone");

function dadosClientes() {
    fetch(urlClientes)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            clientes = data;
            inserirDados();
        });
};

function inserirDados() {
    let indice = 0;
    clientes.forEach((client) => {

        let linha = document.querySelector('#first-line').cloneNode(true);
                
        linha.querySelector('#cod-cli').innerHTML = client.cod_cli;
        linha.querySelector('#name').innerHTML = client.nome;
        linha.querySelector('#adress').innerHTML = client.endereco;
        linha.querySelector('#neighbour').innerHTML = client.bairro;
        linha.querySelector('#city').innerHTML = client.cidade;
        linha.querySelector('#state').innerHTML = client.uf;
        linha.querySelector('#number').innerHTML = `<img src='assets/fone.png' class='phone' onClick='showPhone(${indice})'>`

        document.querySelector("tbody").appendChild(linha);
        
        indice++;
    }) 
};


function showPhone(indice) {
    modais.setAttribute("style","display:flex;");
    modalPhone.setAttribute("style","display:flex;");
    telefones.innerHTML = "";

    clientes[indice].telefones.forEach((e) => {
        let linha = document.querySelector('#prime-line').cloneNode(true);

        linha.querySelector('#type').innerHTML = e.tipo;
        linha.querySelector('#phone-number').innerHTML = e.telefone;

        document.querySelector('#tabelaPhone').appendChild(linha);
    })
};