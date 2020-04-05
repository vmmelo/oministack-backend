const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate'); //importa errors do celebrate para retornar erros de validacao
const cors = require('cors');
const app = express();

app.use(cors(
    {
        exposedHeaders: ['*'] //expoe o header para poder ser consultado pelo axios no frontend
    }
    // {origin: 'http://meuapp.com'} para codigo em producao, autoriza essa url para fazer requisicoes
));
app.use(express.json());
app.use(routes);
app.use(errors());
const PORT = process.env.PORT || 3001; // escuta a porta 3001 por padrao ou a definida na variavel de ambiente
app.listen(PORT);

