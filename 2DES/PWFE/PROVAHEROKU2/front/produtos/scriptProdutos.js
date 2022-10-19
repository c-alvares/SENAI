const url = 'https://patrimoniomongo.herokuapp.com/read/';

const card = document.querySelector("#card");

function carregarDados() {

    fetch( url )
    .then( response => {return response.json()})
    .then( patrimonio => {
        patrimonio.items.forEach( data => {
            let item = card.cloneNode(true);
        

            item.querySelector("#figura").src = "../../docs/assets/" + data.img;
            item.querySelector("#ident").innerHTML = data.id;
            item.querySelector("#ni").innerHTML = data.ni;

            let date = new Date(data.aquisicao);

            item.querySelector("#aquisicao").innerHTML = date.toLocaleString('pt-BR', { timeZone: "UTC-3"})

            item.querySelector("#denominacao").innerHTML = data.denominacao;
            item.querySelector("#valor").innerHTML = data.valor;
            
            document.querySelector("card").appendChild(card)
        })
    })
    .catch( err => console.error(err))
}