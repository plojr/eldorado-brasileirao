const PartidaModel = require("../models/Partida");
const httpStatus = require("http-status-codes");
const PartidaService = require("../services/PartidaService");

exports.get = async (req, res) => {
    const partidas = await PartidaModel.find();
    PartidaService.ordenarPartidasPorRodada(partidas);
    res.status(httpStatus.StatusCodes.OK).send(partidas);
}