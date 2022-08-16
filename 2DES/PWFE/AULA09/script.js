function logar() {
  var log = document.getElementById("telaLogin").cloneNode(true);

  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var logar = false;

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((infoLogin) => {
        if (user == infoLogin.email && pass == infoLogin.username) {
          window.location.href = "post.html";

          let geison = {
            id: infoLogin.id,
            nome: infoLogin.nome,
          };
          window.localStorage.setItem("userGeison", JSON.stringify("geison"));

          logar = true;
        }
      });
      if (logar == false) {
        alert("Login Inválido");
      }
    });
}

function salvar() {
  let salvo = JSON.parse(window.localStorage.getItem(userGeison));

  fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((infoPosts) => {
        let postagem = document.getElementById("posts").cloneNode(true);
      });
    });
}

// Bret
// Sincere@april.biz
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
