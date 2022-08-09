//Apenas analistas e desenvolvedores podem possuir Admin os demais são apenas leitores;
//Apenas cargos de nivel 3 ou superior podem ser Admin;
//Cargos inferiores a 3 podem ser removidos da lista de acesso;

var form = [
	{
		"funcionario":"Sancho Cedraz",
		"cargo":{
			"nome":"Analista",
			"nivel":2
		},
		"autorizado":true
	},		
	{
		"funcionario":"Ionara Pederneiras",
		"cargo":{
			"nome":"Técnico",
			"nivel":2
		},
		"autorizado":true
	},
	{
		"funcionario":"Filipe Castanho",
		"cargo":{
			"nome":"Desenvolvedor",
			"nivel":1
		},
		"autorizado":false
	},
	{
		"funcionario":"Lívia Bicalho",
		"cargo":{
			"nome":"Analista",
			"nivel":3
		},
		"autorizado":true
	},
	{
		"funcionario":"Mauro Varanda",
		"cargo":{
			"nome":"Desenvolvedor",
			"nivel":3
		},
		"autorizado":false
	},	
	{
		"funcionario":"Sandro Rosário",
		"cargo":{
			"nome":"Técnico",
			"nivel":3
		},
		"autorizado":true
	}
];

var itemDescricao = document.querySelector(".form-descricao");

function relacao() {
	form.forEach(descritivo => {
		let novaDescricao = itemDescricao.cloneNode(true);
		let pFuncao = document.createElement("p");
		pFuncao.append("Leitor");
		novaDescricao.querySelector("div").appendChild(pFuncao);	

		novaDescricao.classList.remove("modelo");
		

		novaDescricao.querySelector("#nome-funcionario").innerHTML = descritivo.funcionario;
		novaDescricao.querySelector("#cargo").innerHTML = descritivo.cargo.nome;
		novaDescricao.querySelector("#nivel").innerHTML = descritivo.cargo.nivel;
		
		if (descritivo.cargo.nivel >= 3) {
			novaDescricao.querySelector("button").disabled = true;
			if (descritivo.cargo.nome == "Desenvolvedor" || descritivo.cargo.nome == "Analista" ) {
				pFuncao.innerHTML = "Admin";
			}
		} 

		document.querySelector(".descricao").appendChild(novaDescricao);
	})
}

function removerForm(element) {
	element.parentNode.remove()
}