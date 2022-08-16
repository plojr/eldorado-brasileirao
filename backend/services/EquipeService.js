exports.tratarNomeEquipe = (equipe) => {
    equipe.nome = equipe.nome.charAt(0).toUpperCase() + equipe.nome.slice(1);
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
        var x = a["nome"]; var y = b["nome"];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}