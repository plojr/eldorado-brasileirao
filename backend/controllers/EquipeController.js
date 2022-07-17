const EquipeModel = require('../models/Equipe');

exports.get = async (req, res) => {
    const equipes = await EquipeModel.find();
    res.status(200).send(equipes);
};

exports.post = async (req, res) => {
    try {
        req.body.nome = req.body.nome.toLowerCase();
        req.body.apelido = req.body.apelido.toLowerCase();
        const equipe = await EquipeModel.create({...req.body});
        res.status(200).send(equipe);
    } catch(error) {
        res.status(200).send({"mensagem": "Erro ao inserir equipe. Esta equipe já existe?"});
    }
};

exports.delete = async (req, res) => {
    try {
        await EquipeModel.deleteOne({nome: req.params.nome.toLowerCase()});
        res.status(200).send({deleted: true});
    } catch(error) {
        res.status(200).send({"mensagem": "Erro ao deletar equipe. Esta equipe existe no banco de dados?."});
    }
};