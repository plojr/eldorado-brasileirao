exports.tratarNomeEquipe = (equipe) => {
    const tokensEspaco = equipe.nome.split(" ");
    equipe.nome = "";
    tokensEspaco.forEach(tok => {
        equipe.nome += tok.charAt(0).toUpperCase() + tok.slice(1).toLowerCase() + " ";
    });
    let posTraco = equipe.nome.indexOf("-");
    if(posTraco != -1)
        equipe.nome = equipe.nome.substring(0, posTraco) + equipe.nome.slice(posTraco).toUpperCase();
    equipe.nome = equipe.nome.trim();
    return equipe;
}

exports.tratarNomeEquipes = (equipes) => {
    equipes.forEach(equipe => {
        equipe = this.tratarNomeEquipe(equipe);
    });
    return equipes;
}

exports.ordenarEquipesPorNome = (equipes) => {
    return equipes.sort(function(a, b) {
        var x = a["nome"];
        var y = b["nome"];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}