function nascimentos28(qtd){
    let retorno = [];
    for(i = 0; i < qtd; i++){
        let dia = Math.floor(Math.random() * 28) + 1;
        let mes = Math.floor(Math.random() * 12) + 1;
        let ano = Math.floor(Math.random() * (2006 - 1990 + 1)) + 1990;
        retorno[i] = dia + "/" + mes + "/" + ano;
    }
    return retorno;
}

function nascimentos(qtd) {
        let di = new Date(1990,0,1);
        let df = new Date(2006,11,30);
        return new Date(di.getTime() + Math.random()*(df.getTime(-di.getTime())));
}