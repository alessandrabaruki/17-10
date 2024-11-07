const mongoose = require('mongoose');

const PostagemSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  conteudo: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  dataCriacao: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Postagem', PostagemSchema);
