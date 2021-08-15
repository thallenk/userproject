const express = require('express');

const routes = express.Router();

const User = require('./controllers/UserController')

routes.get('/', User.index);

//Rotas de usuários
routes.post('/api/user', User.create);
routes.get('/api/user', User.index);

module.exports = routes;