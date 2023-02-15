let input_sailsman_id = document.querySelector('#input_sailsman_id');
let input_product_id = document.querySelector('#input_product_id');
let input_quantity = document.querySelector('#input_quantity');
let btn_register = document.querySelector('#btn_register');

let sailsman_structure = document.querySelector('#sailsman_structure');

const uri_create_sails = 'http://localhost:3000/cadastrarvenda/';
const uri_list_sails = 'http://localhost:3000/listarvendas';

function createSail() {
    let create = {
        "id_vendedor": Number(input_sailsman_id.value),
        "detalhe": [
            {
                "id_produto": Number(input_product_id.value),
                "quantidade": Number(input_quantity.value)
            }
        ]

    }

    fetch(uri_create_sails, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(create)
    })
        .then( response => response.status )
        .then( response => {
            if (response == 201) {
                alert("Venda cadastrada com sucesso")
                window.location.reload()
            }else {
                alert('Falha ao cadastrar venda')
            }
        })
        .catch(err => console.error(err));
}

function loadSail() {
    fetch(uri_list_sails)
        .then(response => response.json())
        .then(response => {
            response.forEach(sail => {
                let sails_line = document.querySelector('.sails_line').cloneNode(true)
                // console.log(sector)
                sails_line.classList.remove('model')
                sails_line.querySelector('#sails_id_cell').innerHTML = sail.id
                sails_line.querySelector('#date_cell').innerHTML = sail.data
                sails_line.querySelector('#sailsman_id_cell').innerHTML = sail.id_vendedor
                sail.detalhe.forEach(sail_details => {
                    sails_line.querySelector('#product_id_cell').innerHTML = sail_details.id_produto
                    sails_line.querySelector('#quantity_cell').innerHTML = sail_details.quantidade
                })
                
                sails_structure.appendChild(sails_line)
            })
        })
}