const listaFuncionarios = document.querySelector("#lista-funcionarios")
const linhamodelo = document.querySelector(".linhamodelo");
const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");

const inputMatricula = document.querySelector("#matricula");
const inputNome = document.querySelector("#nome");
const inputCargo = document.querySelector("#cargo");
const inputSalario = document.querySelector("#salario");
const inputCpf = document.querySelector("#cpf");

fetch("http://localhost:3000/funcionarios")
.then(res => { return res.json() })
.then(funcionarios => {
    funcionarios.forEach(funcionario => {
        let linha = linhamodelo.cloneNode(true);
        linha.classList.remove("model");

        let colunas = linha.querySelectorAll("td");
        colunas[0].innerHTML = funcionario.matricula;
        colunas[1].innerHTML = funcionario.nome;
        colunas[2].innerHTML = funcionario.cargo;
        colunas[3].innerHTML = "R$ " + funcionario.salario;
        colunas[2].innerHTML = funcionario.cpf;

        linha.querySelector("#exclui").addEventListener("click", () => {
            modalExcluir.classList.remove("model");
            modalExcluir.querySelector("#cod").innerHTML = funcionario.matricula;
        })

        linha.querySelector("#edita").addEventListener("click", () => {
            modalEditar.classList.remove("model"); 
            btCadedit.innerHTML = "Editar";
            btCadedit.onclick = () => { editarProduto() }
            inputMatricula.value = funcionario.matricula;
            inputNome.value = funcionario.nome;
            inputCargo.value = funcionario.cargo;
            inputSalario.value = funcionario.salario;
            inputCpf.value = funcionario.cpf;
        })

        listaProdutos.appendChild(linha);
    });
});