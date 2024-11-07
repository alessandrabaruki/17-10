const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
  postagem: { type: mongoose.Schema.Types.ObjectId, ref: 'Postagem', required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  conteudo: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comentario', ComentarioSchema);
