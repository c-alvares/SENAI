// Declaração de variável global.
var nome = "Fulano da Silva";

// Pop-up com saída "formatada".
alert(`Meu nome é ${nome}`);


//Lista 1 Exer. 1
// Declaração de variáveis locais.
let A = 5;
let B = 8;
let C = 3;

let RES = (A + B) / C;

alert(RES);


//Lista 2 Exer. 1
let lado1 = 5;
let lado2 = 5;
let lado3 = 5;

if(lado1 == lado2 && lado1 == lado3) {
    alert("Equilátero");
} else if(lado1 != lado2 && lado1 != lado3) {
    alert("Escaleno");
} else {
    alert("Isósceles");
}


//Lista 2 Exer. 2
let salarios = [3200, 2500, 4000, 1700];
// Utilização do Arrow Function
salarios.forEach((salario) => {
    if(salario <= 1903.98){
        console.log("Isento");
    } else if(salario > 1903.98 && salario <= 2826.65) {
        deducao = 0.075 * salario;
        console.log(deducao.toFixed(2));
    } else if(salario > 2826.65 && salario <= 3751.05) {
        deducao = 0.15 * salario;
        console.log(deducao.toFixed(2));
    } else if(salario > 3751.05 && salario <= 4664.68) {
        deducao = 0.225 * salario;
        console.log(deducao.toFixed(2));
    } else {
        deducao = 0.275 * salario;
        console.log(deducao.toFixed(2));
    }
});


//lista 2 Exer. 3




