// // //tagname, id, class
// // var texto = document.getElementsByTagName("h1");

// // console.log(texto);

// // var titulo = document.getElementById("titulo");

// // var aluno = {
// //     nome: "Fulano",
// //     matricula: 234578

// // };

// // titulo.innerHTML = `Nome : ${aluno.nome} <br/> Matrícula : ${aluno.matricula}`; //modificar tags

// // titulo.style.color = "green";
// // //titulo.style.margin = "200px";

// // var mensagem = document.getElementById("mensagem"); //chamar pelo ID

// // mensagem.style.display = "block";

// // var divisao = document.getElementsByClassName("divisao"); //chamar pela classe

// // document.querySelector(); //retorna sempre um elemento
// // document.querySelectorAll(); //retornar um vetor com todas as identificações que eu passar

// var titulo2 = document.querySelector("#titulo");
// var div = document.querySelectorAll(".divisao");
// var msg = document.querySelector("h1");

// console.log(msg);

var busca = document.querySelector("#busca");

var linhas = document.querySelectorAll("tr");

var btBusca = document.querySelector("button");

btBusca.addEventListener("click", buscarNome);

busca.addEventListener("keyup", buscarNome);

function buscarNome() {

    console.log(busca.value);

    let encontrei = false;

    linhas.forEach((linha) => {
        let temp = linha.querySelector("td")
        if(temp != null) {
            // if(temp.innerHTML.toLowerCase() == busca.value.toLowerCase()) {
            //     alert("encontrei");
            //     encontrei = true;
            //     linha.style.fontWeight = "bold";
            //     linha.style.color = "pink"

            // }
            //-----------
            // if(temp.innerHTML.toLowerCase().includes(busca.value.toLowerCase())) {
            //     linha.style.display = "table-row";
            // } else {
            //     linha.style.display = "none";
            // }
            //-----------
            if(linha.innerHTML.toLowerCase().includes(busca.value.toLowerCase())) {
                linha.style.display = "table-row";
            } else {
                linha.style.display = "none";
            }
        }
    });    

//    if(!encontrei) alert("Não encontrei");
}



// let v1 = 1;
// let v2 = "1";

// if(v1 !== v2) {
//     console.log("NÃO SOMOS IGUAIS");
// }