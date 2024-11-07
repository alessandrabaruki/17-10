const Postagem = require('../models/Postagem');

exports.criarPostagem = async (req, res) => {
  try {
    const { titulo, conteudo } = req.body;
    const postagem = await Postagem.create({ titulo, conteudo, autor: req.usuario._id });
    res.status(201).json(postagem);
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao criar postagem', erro: err.message });
  }
};

exports.listarPostagens = async (req, res) => {
  const postagens = await Postagem.find().populate('autor', 'nome');
  res.json(postagens);
};

exports.obterPostagem = async (req, res) => {
  const postagem = await Postagem.findById(req.params.id).populate('autor', 'nome');
  if (!postagem) return res.status(404).json({ mensagem: 'Postagem não encontrada' });
  res.json(postagem);
};

exports.atualizarPostagem = async (req, res) => {
  const postagem = await Postagem.findById(req.params.id);
  if (!postagem || postagem.autor.toString() !== req.usuario._id.toString()) {
    return res.status(403).json({ mensagem: 'Acesso negado' });
  }

  postagem.titulo = req.body.titulo || postagem.titulo;
  postagem.conteudo = req.body.conteudo || postagem.conteudo;
  await postagem.save();
  res.json(postagem);
};

exports.deletarPostagem = async (req, res) => {
  const postagem = await Postagem.findById(req.params.id);
  if (!postagem || postagem.autor.toString() !== req.usuario._id.toString()) {
    return res.status(403).json({ mensagem: 'Acesso negado' });
  }
  await postagem.remove();
  res.json({ mensagem: 'Postagem deletada com sucesso' });
};
