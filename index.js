const express = require('express');
const consign = require('consign');

const app = express();

//-> Organizar o carregamento dos endpoints da API.
//   Possibilita definir uma sequência para inicialização da aplicação.
//   Usa a biblioteca "consign".
consign()
    .include('lib/config.js')
    .then('db.js')
    .then('auth.js')
    .then('lib/middlewares.js')
    .then('routes')
    .then('lib/boot.js')
    .into(app);