const uri = 'http://localhost:3000/patrimonio/itens/';
const corpo = document.querySelector("#corpo");
var itens = [];
// uri é api local / url é api hospedada em outro local
const carregar = () => {
    const options = { method: 'GET' };
    fetch(uri, options)
        .then(res => res.json())
        .then(res => {
            itens = res;
            preencherTela();
        })
        .catch(err => console.error(err));
}

const preencherTela = () => {
    itens.forEach(e => {
        let card = document.querySelector(".card").cloneNode(true);
        card.classList.remove('model');
        card.querySelector("#ni").innerHTML += e.ni;
        card.querySelector("#aquisicao").innerHTML += e.aquisicao;
        card.querySelector("#denominacao").innerHTML += e.denominacao;
        card.querySelector("#valor").innerHTML += e.valor;
        card.querySelector("#img").src = '../docs/assets/'+e.img;
        card.querySelector("#del").setAttribute('onclick',`del(${e.ni})`);
        corpo.appendChild(card);
    });
}

const del = (ni) => {
    const options = {
        method: 'DELETE', 
        headers: {'Content-Type': 'application/json'}, 
        body: 'false'
    };
    if(confirm("Confirma a exclusão do item "+ni)){
        fetch(uri+ni, options)
        .then(res => res.json())
        .then(res => window.reload())
        .catch(err => console.error(err));
    }   
}