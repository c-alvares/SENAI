var name = document.getElementById("nome");
var mail = document.getElementById("email");
var password = document.getElementById("senha");
var repPassword = document.getElementById("repeteSenha");
var mobile = document.getElementById("telefone");
var zip = document.querySelector("#caixaPostal");

function buscaCep () {
    
    fetch("https://viacep.com.br/ws/" + zip.value + "/json/")
    .then(response => { return response.json() })
    .then(data => {
        if(zip.value == data.cep) {
        document.querySelector('#logradouro').value = data.logradouro;
        document.querySelector('#complemento').value = data.complemento;
        document.querySelector('#bairro').value = data.bairro;   
        document.querySelector('#cidade').value = data.localidade;   
        document.querySelector('#estado').value = data.uf;       
        }
       
    })

}
// https://viacep.com.br/