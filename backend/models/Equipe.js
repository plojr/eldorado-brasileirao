const { Schema, model } = require("mongoose");
 
const EquipeSchema = new Schema({
  nome: {
    type: String,
    required: true,
    unique: true
  },
  apelido: {
    type: String,
    required: false,
  }
}, 
{
  timestamps: false,
});
 
module.exports = model('Equipes', EquipeSchema);
