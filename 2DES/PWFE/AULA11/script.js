function noClick1(){
    fetch("http://localhost:5000/academia/vw_dalunos")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(cracha => {
            let div = document.createElement("div");
            let ident = document.createElement("h4");
            let name = document.createElement("p");
            let genero = document.createElement("p");
            let nasc = document.createElement("p");
            let massa = document.createElement("p");
            let phone = document.createElement("p");

            ident.innerHTML = cracha.id_aluno;
            name.innerHTML = cracha.nome;
            genero.innerHTML = cracha.sexo;
            nasc.innerHTML = cracha.nascimento;
            massa.innerHTML = cracha.peso;
            phone.innerHTML = cracha.numero;

            div.classList.add("card-aluno");

            document.querySelector("body").appendChild(div);
            div.append(ident, name, genero, nasc, massa, phone);
                    
        })
    });
};

function noClick2(){
    fetch("http://localhost:5000/academia/vw_fexercicio")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(cracha => {
            let div = document.createElement("div");
            let ident = document.createElement("h4");
            let name = document.createElement("p");
            let genero = document.createElement("p");
            let nasc = document.createElement("p");
            let massa = document.createElement("p");
            let phone = document.createElement("p");

            ident.innerHTML = cracha.id_aluno;
            name.innerHTML = cracha.nome;
            genero.innerHTML = cracha.sexo;
            nasc.innerHTML = cracha.nascimento;
            massa.innerHTML = cracha.peso;
            phone.innerHTML = cracha.numero;

            div.classList.add("card-aluno");

            document.querySelector("body").appendChild(div);
            div.append(ident, name, genero, nasc, massa, phone);
                    
        })
    });
};

// create table exercicios(
//     id_exercicio integer not null primary key auto_increment,
//     descricao varchar(50) not null,
//     grupo_muscular varchar(20) not null,
//     id_aparelho integer not null
// );

// create table aparelhos(
//     id_aparelho	integer not null primary key auto_increment,
//     nome varchar(50) not null
// );

// create table fichas(
//     id_aluno integer not null,
//     id_exercicio integer not null,
//     dia_semana varchar(20) not null,
//     série varchar(40) not null
// ); 