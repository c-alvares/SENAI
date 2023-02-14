let input_name = document.querySelector('#input_name');
let input_comission = document.querySelector('#input_comission');
let btn_register = document.querySelector('#btn_register');

let sector_structure = document.querySelector('#sector_structure');

const uri_create_sector = 'http://localhost:3000/criarsetor/';
const uri_list_sectores = 'http://localhost:3000/buscarsetores';

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

function loadSectors() {
    fetch(uri_list_sectores)
        .then(response => response.json())
        .then(response => {
            response.forEach(sector => {
                let sector_line = document.querySelector('.sector_line').cloneNode(true)
                // console.log(sector)
                sector_line.classList.remove('model')
                sector_line.querySelector('#id_cell').innerHTML = sector.id
                sector_line.querySelector('#name_cell').innerHTML = sector.nome
                sector_line.querySelector('#comission_cell').innerHTML = sector.comissao
                sector_structure.appendChild(sector_line)
            })
        })
}