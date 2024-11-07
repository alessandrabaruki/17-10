const express = require('express');
const { proteger } = require('../middlewares/authMiddleware');
const { criarComentario, listarComentarios } = require('../controllers/comentarioController');
const router = express.Router();

router.post('/', proteger, criarComentario);
router.get('/:postagemId', listarComentarios);

module.exports = router;
