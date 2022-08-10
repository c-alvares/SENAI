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

var telaLogin = document.querySelector("#telaLogin");
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
    } else console.log("Entrou")

}
