const url = 'https://patrimoniomongo.herokuapp.com/login';
const home = '../home/home.html';

function logar() {

    let data = JSON.stringify({
        'username': document.querySelector('#inpEmail').value,
        'password': document.querySelector('#inpSenha').value,
    });
    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: data
    };

    fetch(url, options)
    .then( response => response.json() )
    .then( result => {
        if (result.erro === undefined) {
            localStorage.setItem("info", JSON.stringify({"username":data.username, "image":data.img}));
            window.location.assign(home)
        }
    })

}

