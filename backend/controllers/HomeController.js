const httpStatus = require("http-status-codes");

exports.get = async (req, res, next) => {
    res.status(httpStatus.StatusCodes.OK).send({"mensagem": "Bem vindo ao Eldorado!"});
}