/* 1 - Crie uma função que valide se um valor passado como parâmetro é uma placa de
automóvel ex: validarPlaca(placa) a função deve retornar um valor boolean, “true” se for uma
placa válida e “false” se não for válida.
OBS: dev validar tanto as placas antigas ex: ABC1212 como as novas ABC1B12 */
var placa = document.querySelector("#inpPlaca");
var validar = document.querySelector("#btPlaca");
var confirmacao = document.querySelector("#outPlaca")

validar.addEventListener("click", excValidarPlaca);

function excValidarPlaca() {
    if (validarPlaca(placa.value)) {
        confirmacao.innerHTML = "Placa Válida";         
    } else{
        confirmacao.innerHTML = "Placa Inválida";
    }
}

function validarPlaca(placa) {
    if(placa.length == 7) {
        let placaAntiga = /^[a-zA-Z]{3}[0-9]{4}$/;
        let placaNova = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
        let placaMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;

        if (placaAntiga.test(placa) || placaNova.test(placa) || placaMoto.test(placa)) return true;    
    }
    return false;
} 

/* 2 – Crie uma função para validar se um CPF é válido, busque na internet quais são as regras
para que um CPF seja validado. A função deve ser no mesmo modelo da função anterior ex:
validaCPF(cpf) e retornar verdadeiro ou falso. */

var inpCpf = document.getElementById("rcbCpf");
var outpCpf = document.getElementById("retornoCpf");

function exValidarCPF() {
    if (validarCPF(inpCpf.value)) {
        outpCpf.innerHTML = "CPF Válido";
    } else {
        outpCpf.innerHTML = "CPF Inválido;"
    }
}


function validarCPF(cpf) {

    if(cpf.length != 11) return false;

    if(cpf == "11111111111"|| 
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" ||
        cpf == "00000000000" 
    ) return false;

    let dig1 = 0, dig2 = 0;    
    for(let i = 0; i < 9; i++){
        dig1 += cpf[i] * (i+1);
        dig2 += cpf[i] * i;
    }
    dig1 %= 11;
    if(dig1 == 10) dig1 = 0;
    if(dig1 != cpf[9]) return false;

    dig2 += dig1 * 9;
    dig2 %= 11;
    if(dig2 % 11 == 10) dig2 = 0;
    if(dig2 != cpf[10]) return false;
    
    return true;
}


//--------------------------------------------------------------------------------------

/* 3 – Crie uma função que gere telefones aleatórios, a função deve receber como parâmetro o
número ddd e a quantidade de telefones e deve retornar um vetor com os números gerados.
Ex: geraTelefones(19,3) e deve retornar ex: 19-98777-7898, 19-98777-7898, 19-94687-4568 */


function gerarTelefone(ddd, qtd) {
    let telefone = []; 
    for(let i = 0; i < qtd; i++) {
        //Math.floor() ->> arredonda para o inteiro maior
        //Math.random() * (max - min + 1) + min ->> gera número aleatório entre o máx e mín (inclusos)
        let parte1 = Math.floor(Math.random() * (99999 - 70000 + 1)) + 70000;
        let parte2 = Math.floor(Math.random() * (9999 - 7000 + 1)) + 7000;
        telefone [i] = console.log(ddd + "-" + parte1 + "-" + parte2);
    }
    return telefone;
}
//gerarTelefone(11, 10);
//--------------------------------------------------------------------------------------

/* 4 – Crie uma função que gere CPFs válidos aleatórios, deve receber como parâmetro quantos
CPFs deve gerar e retornar um vetor com os CPFs gerados. */

function gerarCPF(quantidade) {
    let cpf = [];
    let index = 0;

    while(index != quantidade) {
        let cpfGerado = Math.floor(Math.random() * (99999999999 - 10000000000 + 1) + 10000000000).toString();
        // Necessário transformar em String pois a função validarCPF() não aceita número;
        if(validarCPF(cpfGerado)) {
            cpf.push(cpfGerado);
            // O método push() adiciona novos ítens AO FINAL de um array;
            index++;
        }
    }
    //console.log(cpf);
    return cpf; 
}

 //gerarCPF(5);

//--------------------------------------------------------------------------------------

/* 5 – Crie uma interface web (Página HTML) para testar as funções criadas, com campos de input
para digitar placa de veículo, CPF, quantos Telefones e quantos CPFs deverão ser gerados. */