const { Schema, model } = require("mongoose");

const GolSchema = new Schema({
    minuto: Number,
    tempo: Number
});

const PartidaSchema = new Schema({
  rodada: {Number},
  mandante: {
      nome: String,
      gols: [GolSchema]
  },
  visitante: {
      nome: String,
      gols: [GolSchema]
  }
});
 
module.exports = model('Partidas', PartidaSchema);
