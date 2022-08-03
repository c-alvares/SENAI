function criarElemento() {
  let itemLista = document.createElement("div");
  itemLista.className = "item-lista";

  let thumbnail = document.createElement("img");
  thumbnail.src = "./assets/sinuca.jpg";
  thumbnail.id = "thumb";
  thumbnail.alt = "Foto do Restaurante";

  let like = document.createElement("img");
  like.src = "./assets/ngosto.png";
  like.id = "like";
  like.alt = "Icone de coracaozin";

  let avaliacao = document.createElement("img");
  avaliacao.src = "./assets/star.png";
  avaliacao.id = "avaliacao";
  avaliacao.alt = "Avalicao";

  let info = document.createElement("div");
  info.id = "info";

  let nomeRestaurante = document.createElement("p");
  nomeRestaurante.innerHTML =
    "Xurumelas Bar 2.0 Muito Mais Melhor do que antes";

  let textoAvalicao = document.createElement("p");

  textoAvalicao.appendChild(avaliacao);
  textoAvalicao.append("4.9");

  info.appendChild(nomeRestaurante);
  info.appendChild(textoAvalicao);

  itemLista.appendChild(thumbnail);
  itemLista.appendChild(info);
  itemLista.appendChild(like);

  document.querySelector(".lista").appendChild(itemLista);
}
