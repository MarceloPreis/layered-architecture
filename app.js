const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');

// Configura��o do engine de visualiza��o
app.set('view engine', 'ejs');

// Middleware para servir arquivos est�ticos
app.use(express.static('public'));

// Rotas
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.use(router);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
