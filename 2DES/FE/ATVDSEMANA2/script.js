/* 1 - Crie uma função que valide se um valor passado como parâmetro é uma placa de
automóvel ex: validarPlaca(placa) a função deve retornar um valor boolean, “true” se for uma
placa válida e “false” se não for válida.
OBS: dev validar tanto as placas antigas ex: ABC1212 como as novas ABC1B12 */
var placa = document.querySelector("#inpPlaca");
var validar = document.querySelector("#btPlaca");

validar.addEventListener("click", excValidarPlaca);

function excValidarPlaca() {
    if (validarPlaca(placa) == true) {
        outPlaca.innerHTML = "Placa Válida";         
    } else{
        outPlaca.innerHTML = "Placa Inválida";
    }
}

function validarPlaca(placa) {
    if(placa.length !== 7) {
        return false;
    } else {
        const placaAntiga = /^[a-zA-Z]{3}[0-9]{4}$/;
        const placaNova = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/;
        const placaMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;

        if (placaAntiga.test(placa)) {
            return true;
            console.log(true);
        } else {
            console.log(false);
            return false;
        }
    } 
}



//--------------------------------------------------------------------------------------

/* 2 – Crie uma função para validar se um CPF é válido, busque na internet quais são as regras
para que um CPF seja validado. A função deve ser no mesmo modelo da função anterior ex:
validaCPF(cpf) e retornar verdadeiro ou falso. */

function validarCPF(cpf) {
    let multi1, multi2;
    let digVerificador1, digVerificador2;
    let soma1 = 0;
    let soma2 = 0;
    let indice = 0;
    let index = 0;
 //Cálculo do primeiro digito    
    if(cpf.length == 11) {
        for(let i = 1; i <= 9; i++){
            multi1 = i * cpf[indice];
            soma1 += multi1;
            indice++
        }
        if(soma1 % 11 == 10) {
            digVerificador1 = 0;
        } else{
            digVerificador1 = soma1 % 11;
        }
        if(digVerificador1 != cpf[9]) {
            //console.log("CPF Inválido");
            return false;
        } else{
//Cálculo do segundo dígito
            for(let i = 0; i <=9; i++){
                multi2 = i * cpf[index];
                soma2 += multi2;
                index++
            }
            if(soma2 % 11 == 10) {
                digVerificador2 = 0;
            } else{
                digVerificador2 = soma2 % 11;
            }
            if(digVerificador2 != cpf[10]) {
                //console.log("CPF Inválido")
                return false;
            } else{
                //console.log("CPF Válido")
                return true;
            }
        }
            

    }
    
}

//validarCPF("13731949792");
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