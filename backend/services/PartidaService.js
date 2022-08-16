exports.ordenarPartidasPorRodada = (partidas) => {
    return partidas.sort(function(a, b) {
        var x = a["rodada"]; var y = b["rodada"];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}