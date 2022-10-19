const url = "https://patrimoniomongo.herokuapp.com/read/";

function carregarDados() {

    fetch( url )
    .then( response => { return response.json() })
    .then( patrimonio => {
        console.log(patrimonio)
        patrimonio.items.forEach( item => {
              
            let card = document.querySelector(".corpo").cloneNode(true);
            card.classList.remove('model');

            card.querySelector("#figura").src = '../../docs/assets/' + item.img;
            card.querySelector("#ident").innerHTML = item.id;
            card.querySelector("#ni").innerHTML = item.ni;
            card.querySelector("#aquisicao").innerHTML = item.aquisicao;
            card.querySelector("#denominacao").innerHTML = item.denominacao;
            card.querySelector("#valor").innerHTML = item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            
            document.querySelector("tbody").appendChild(card);
        })
    })
    .catch( err => console.error(err))
}