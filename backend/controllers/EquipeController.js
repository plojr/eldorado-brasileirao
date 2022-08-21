const EquipeModel = require("../models/Equipe");
const httpStatus = require("http-status-codes");
const EquipeService = require("../services/EquipeService");

exports.get = async (req, res) => {
    const equipes = await EquipeModel.find();
    EquipeService.ordenarEquipesPorNome(equipes);
    res.status(httpStatus.StatusCodes.OK).send(EquipeService.tratarNomeEquipes(equipes));
};

exports.post = async (req, res) => {
    console.log(req);
    try {
        req.body.nome = req.body.nome.toLowerCase();
        const equipe = await EquipeModel.create({...req.body});
        res.status(httpStatus.StatusCodes.CREATED).send(equipe);
    } catch(error) {
        res.status(httpStatus.StatusCodes.CONFLICT).send({mensagem: "Erro ao inserir equipe. Esta equipe já existe?"});
    }
};

exports.delete = async (req, res) => {
    try {
        await EquipeModel.deleteOne({_id: req.params.id});
        res.status(httpStatus.StatusCodes.NO_CONTENT).send({deleted: true});
    } catch(error) {
        res.status(httpStatus.StatusCodes.CONFLICT).send({mensagem: "Erro ao deletar equipe. Esta equipe existe no banco de dados?."});
    }
};