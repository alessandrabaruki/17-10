const express = require('express');
const { proteger } = require('../middlewares/authMiddleware');
const {
  criarPostagem,
  listarPostagens,
  obterPostagem,
  atualizarPostagem,
  deletarPostagem,
} = require('../controllers/postagemController');
const router = express.Router();

router.post('/', proteger, criarPostagem);
router.get('/', listarPostagens);
router.get('/:id', obterPostagem);
router.put('/:id', proteger, atualizarPostagem);
router.delete('/:id', proteger, deletarPostagem);

module.exports = router;
