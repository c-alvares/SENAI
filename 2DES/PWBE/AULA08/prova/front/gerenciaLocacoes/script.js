const urlListar = `http://localhost:3000/vw_locados`;
var locacoes = [];

const corpoTabela = document.querySelector(".corpoTabela");

function dadosLocacao() {
    fetch(urlListar)
    .then(res => { 
        return res.json()
    })
    .then(rent => { 
        locacoes = rent;
        console.log(locacoes);
        inserirDadosL();
    })
};

function inserirDadosL() {
    corpoTabela.innerHTML = "";

    locacoes.forEach((locacao) => {
        let tr = document.createElement("tr");
        let nome = document.createElement("td");
        let telefone = document.createElement("td");
        let filme = document.createElement("td");
        let data = document.createElement("td");
        let multa = document.createElement("td");
        let devolver = document.createElement("td");
        let btDevolver = document.createElement("button");
        let btImagem = document.createElement("img");
        
        nome.innerHTML = locacao.Nome_do_Cliente;
        telefone.innerHTML = locacao.Telefone_do_Cliente;
        filme.innerHTML = locacao.Filme;
        data.innerHTML = locacao.Data_de_Locação.split("T")[0];
        // multa.innerHTML = locacao.
        // devolver.innerHTML = locacao.
        
        btImagem.setAttribute("src", "./assets/return.svg");
        btDevolver.setAttribute("id", "devolver");


        btDevolver.appendChild(btImagem);
        devolver.appendChild(btDevolver);

        tr.appendChild(nome);
        tr.appendChild(telefone);
        tr.appendChild(filme);
        tr.appendChild(data);
        tr.appendChild(multa);
        tr.appendChild(devolver);

        corpoTabela.appendChild(tr);
    })
};

function calcularMulta() {
    let hoje = Date.now();
    let prazo = hoje - locacao.Data_de_Locação;
    if(prazo > 3){
        let multa = 1.35 * (prazo-3);
        return multa;
    }
};