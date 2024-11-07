const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const config = require('../config');

exports.registrar = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const usuario = await Usuario.create({ nome, email, senha });
    const token = jwt.sign({ id: usuario._id }, config.JWT_SECRET, { expiresIn: '1d' });
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao registrar usuário', erro: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario || !(await usuario.compararSenha(senha))) {
      return res.status(400).json({ mensagem: 'Credenciais inválidas' });
    }
    const token = jwt.sign({ id: usuario._id }, config.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro no login', erro: err.message });
  }
};
