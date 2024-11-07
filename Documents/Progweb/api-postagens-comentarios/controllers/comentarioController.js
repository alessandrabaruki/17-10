const Comentario = require('../models/Comentario');

exports.criarComentario = async (req, res) => {
  try {
    const { conteudo, postagem } = req.body;
    const comentario = await Comentario.create({
      conteudo,
      postagem,
      autor: req.usuario._id,
    });
    res.status(201).json(comentario);
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao criar comentário', erro: err.message });
  }
};

exports.listarComentarios = async (req, res) => {
  const comentarios = await Comentario.find({ postagem: req.params.postagemId }).populate('autor', 'nome');
  res.json(comentarios);
};
