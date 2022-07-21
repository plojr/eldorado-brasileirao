const PartidaModel = require("../models/Partida")
const httpStatus = require("http-status-codes");

exports.get = async (req, res) => {
    const partidas = await PartidaModel.find();
    res.status(httpStatus.StatusCodes.OK).send(partidas);
}