const url = 'https://patrimoniomongo.herokuapp.com/read/';

function carregarDados() {
    const options = {method: 'GET'};

    fetch( url, options )
    .then( response => response.json())
    .then( response => {
        response.forEach(cardin => {
            console.log(cardin)
            
            let card = document.querySelector(".card").cloneNode(true)

            card.querySelector("#figura").innerHTML = cardin.img
            card.querySelector("#ident").innerHTML = cardin.id
            card.querySelector("#ni").innerHTML = cardin.ni
            card.querySelector("#aquisicao").innerHTML = cardin.aquisicao
            card.querySelector("#denominacao").innerHTML = cardin.denominacao
            card.querySelector("#valor").innerHTML = cardin.valor
            
            document.querySelector("#card").appendChild(card)
        })
    })
    .catch( err => console.error(err))
}