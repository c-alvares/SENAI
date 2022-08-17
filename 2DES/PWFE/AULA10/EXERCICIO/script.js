var name = document.getElementById("nome");
var mail = document.getElementById("email");
var password = document.getElementById("senha");
var repPassword = document.getElementById("repeteSenha");
var mobile = document.getElementById("telefone");
var zip = document.getElementById("cep");
var street = document.getElementById("logradouro");
var complement = document.getElementById("complemento");
var neighborhood = document.getElementById("bairro");
var city = document.getElementById("cidade");
var state = document.getElementById("estado");


function buscaCep () {
    fetch("https://viacep.com.br/ws/" + zip.value + "/json/")
    .then(response => { return response.json() })
    .then(data => {
        if(zip.value == data.cep) {
        street.innerHTML = data.logradouro;    
        }
    })

}
// https://viacep.com.br/