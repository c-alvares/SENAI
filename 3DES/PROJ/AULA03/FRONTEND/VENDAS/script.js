let input_name = document.querySelector('#input_name');
let input_salary = document.querySelector('#input_salary');
let input_sector = document.querySelector('#input_sector');
let btn_register = document.querySelector('#btn_register');

let sailsman_structure = document.querySelector('#sailsman_structure');

const uri_create_sailsman = 'http://localhost:3000/cadastrarvendedor/';
const uri_list_sailsman = 'http://localhost:3000/buscarvendedores';

function createSail() {
    let create = {
        "nome": input_name.value,
        "salario": Number(input_salary.value),
        "setor": Number(input_sector.value)
    }

    fetch(uri_create_sailsman, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(create)
    })
        .then( response => response.status )
        .then( response => {
            if (response == 201) {
                alert("Vendedor cadastrado com sucesso")
                window.location.reload()
            }else {
                alert('Falha ao cadastrar vendedor')
            }
        })
        .catch(err => console.error(err));
}

function loadSail() {
    fetch(uri_list_sailsman)
        .then(response => response.json())
        .then(response => {
            response.forEach(sector => {
                let sailsman_line = document.querySelector('.sailsman_line').cloneNode(true)
                // console.log(sector)
                sailsman_line.classList.remove('model')
                sailsman_line.querySelector('#id_cell').innerHTML = sector.id
                sailsman_line.querySelector('#name_cell').innerHTML = sector.nome
                sailsman_line.querySelector('#salary_cell').innerHTML = sector.salario
                sailsman_line.querySelector('#sector_cell').innerHTML = sector.setor
                
                sailsman_structure.appendChild(sailsman_line)
            })
        })
}