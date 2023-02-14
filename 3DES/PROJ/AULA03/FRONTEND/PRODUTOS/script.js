let input_name = document.querySelector('#input_name');
let input_price = document.querySelector('#input_price');
let input_sector = document.querySelector('#input_sector');
let btn_register = document.querySelector('#btn_register');

let product_structure = document.querySelector('#product_structure');

const uri_create_product = 'http://localhost:3000/cadastrarproduto/';
const uri_list_products = 'http://localhost:3000/buscarprodutos';

function createProduct() {
    let create = {
        "nome": input_name.value,
        "valor": Number(input_price.value),
        "setor": Number(input_sector.value)
    }

    fetch(uri_create_product, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(create)
    })
        .then( response => response.status )
        .then( response => {
            if (response == 201) {
                alert("Produto cadastrado com sucesso")
                window.location.reload()
            }else {
                alert('Falha ao cadastrar produto')
            }
        })
        .catch(err => console.error(err));
}

function loadProduct() {
    fetch(uri_list_products)
        .then(response => response.json())
        .then(response => {
            response.forEach(product => {
                let product_line = document.querySelector('.product_line').cloneNode(true)
                // console.log(product)
                product_line.classList.remove('model')
                product_line.querySelector('#name_cell').innerHTML = product.nome
                product_line.querySelector('#price_cell').innerHTML = product.valor
                product_line.querySelector('#sector_cell').innerHTML = product.setor
                product_structure.appendChild(product_line)
            })
        })
}