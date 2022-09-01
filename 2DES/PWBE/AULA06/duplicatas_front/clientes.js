function dadosClientes() {
    fetch('http://localhost:3000/duplicatas/clientes')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((client) => {

            let linha = document.querySelector('#first-line').cloneNode(true);
            linha.querySelector('#cod-cli').innerHTML = client.cod_cli;
            linha.querySelector('#name').innerHTML = client.nome;
            linha.querySelector('#adress').innerHTML = client.endereco;
            linha.querySelector('#neighbour').innerHTML = client.bairro;
            linha.querySelector('#city').innerHTML = client.cidade;
            linha.querySelector('#state').innerHTML = client.uf;


            document.querySelector("tbody").appendChild(linha);
        })
    });
};