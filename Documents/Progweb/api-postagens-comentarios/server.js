const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');
const postagemRoutes = require('./routes/postagemRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  

app.use('/usuarios', usuarioRoutes);
app.use('/postagens', postagemRoutes);
app.use('/comentarios', comentario);
