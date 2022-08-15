fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => {
    return response.json();
})
.then((data) => {
    data.forEach(usuario => {
        let u = document.createElement("p");
        u.innerHTML = usuario.userId;
        let t = document.createElement("p");
        t.innerHTML = usuario.title;
        let c = document.createElement("input")
        c.type = "checkbox";
        
        if (usuario.completed == true) c.checked = true;

        let s = document.createElement("div");
        s.setAttribute("id", "card" );

        s.appendChild(u);
        s.appendChild(t);
        s.appendChild(c);

        document.querySelector("body").append(u, t, c, s);
    })
})