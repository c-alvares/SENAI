let input_name = document.querySelector('#input_name');
let input_comission = document.querySelector('#input_comission');
let btn_register = document.querySelector('#btn_register');

const uri_create_sector = 'http://localhost:3000/criarsetor/';

function createSector() {
    let create = {
        "nome": input_name.value,
        "comissao": Number(input_comission.value)
    }

    fetch(uri_create_sector, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(create)
    })
        .then( response => response.status )
        .then( response => {
            if (response == 201) {
                alert("Setor cadastrado com sucesso")
                window.location.reload()
            }else {
                alert('Falha ao cadastrar setor')
            }
        })
        .catch(err => console.error(err));
}