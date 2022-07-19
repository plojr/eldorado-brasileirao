const EquipeModel = require("../models/Equipe");
const httpStatus = require("http-status-codes");

exports.get = async (req, res) => {
    const equipes = await EquipeModel.find();
    res.status(httpStatus.StatusCodes.OK).send(equipes);
};

exports.post = async (req, res) => {
    try {
        req.body.nome = req.body.nome.toLowerCase();
        req.body.apelido = req.body.apelido.toLowerCase();
        const equipe = await EquipeModel.create({...req.body});
        res.status(httpStatus.StatusCodes.CREATED).send(equipe);
    } catch(error) {
        res.status(httpStatus.StatusCodes.CONFLICT).send({"mensagem": "Erro ao inserir equipe. Esta equipe já existe?"});
    }
};

exports.delete = async (req, res) => {
    try {
        await EquipeModel.deleteOne({nome: req.params.nome.toLowerCase()});
        res.status(httpStatus.StatusCodes.NO_CONTENT).send({deleted: true});
    } catch(error) {
        res.status(httpStatus.StatusCodes.CONFLICT).send({"mensagem": "Erro ao deletar equipe. Esta equipe existe no banco de dados?."});
    }
};