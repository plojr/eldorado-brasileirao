exports.tratarNomeEquipe = (equipe) => {
    equipe.nome = equipe.nome.charAt(0).toUpperCase() + equipe.nome.slice(1);
    equipe.apelido = equipe.apelido.charAt(0).toUpperCase() + equipe.apelido.slice(1);
    return equipe;
}

exports.tratarNomeEquipes = (equipes) => {
    equipes.forEach(equipe => {
        equipe = this.tratarNomeEquipe(equipe);
    });
    return equipes;
}