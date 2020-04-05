const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

//adiciona a validacao com o celebrate antes da criacao da ong (nao faz sentido validar depois de criar)
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);

routes.get('/incidents', IncidentController.index);


routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.get('/', (req, res) =>  {
    return res.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Galetinho'
    })
});

routes.get('/users', (req, res) =>  {
    //localhost:3001/users?nome=Cleiton => req.query.nome = Cleiton
    //
    return res.json({
        evento: 'Semana OmniStack 11.0',
        aluno: req.query.nome
    })
});

routes.get('/users/:id', (req, res) =>  {
    //localhost:3001/users/1 => req.params.id = 1
    //
    return res.json({
        evento: 'Semana OmniStack 11.0',
        id: req.params.id
    })
});

module.exports = routes;