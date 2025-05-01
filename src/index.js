const express = require('express');
const app = express();
const db = require('./config/db_config.js');

app.use(express.json({limit: '5mb'}));

app.use('/', require('./route/generalRouter'));
app.use('/imagem', require('./route/storageRouter'));

app.get('/integrity', (req, res) => {
  res.send('Application is live');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

