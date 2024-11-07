const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const config = require('../config');

exports.proteger = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) return res.status(401).json({ mensagem: 'Acesso negado' });

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.usuario = await Usuario.findById(decoded.id);
    next();
  } catch (e) {
    res.status(401).json({ mensagem: 'Token inválido' });
  }
};
