const express = require('express');
const routes = require('./routes')
const app = express();

app.use(cors(
    // {origin: 'http://meuapp.com'} para codigo em producao, autoriza essa url para fazer requisicoes
));
app.use(express.json());
app.use(routes);
app.listen(3001);

