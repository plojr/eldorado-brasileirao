const { Schema, model } = require("mongoose");
 
const EquipeSchema = new Schema({
  nome: {
    type: String,
    required: true,
    unique: true
  }
});
 
module.exports = model('Equipes', EquipeSchema);
