function noClick(){
    fetch("http://localhost:5000/academia/vw_dalunos")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(cracha => {
            let div = document.createElement("div");
            div.classList.add("card-aluno");
            // let ident = document.createElement("p");
            let name = document.create
            // let
            // let phone = document.createElement("p");

            ident.innerHTML = cracha.id_aluno;
            phone.innerHTML = cracha.numero;

            div.append(ident, phone);
            document.querySelector("body").appendChild(div);

        
        })
    });
};