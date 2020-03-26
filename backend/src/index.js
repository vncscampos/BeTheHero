const express = require('express'); //importando a framework express
const cors = require('cors');
const routes = require('./routes');

const app = express(); //criação da aplicação
app.use(cors());
app.use(express.json()); //fala pro express converter o JSON para um objeto pra js

app.use(routes);
app.listen(3333);


// Metodo HTTP:
// GET: buscar/ listar uma informação do back-end
// POST: criar uma informação no back-end
// PUT: alterar uma informação no back-end
// DELETE: deletar uma informação

// Tipos de Parametro:
// Query: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
// Rute: Parâmetros utilizados para identificar recursos
// Request Body: Corpo da requisição, utilizado para criar ou alterar recursos


// Driver: usar a linguagem SQL para acessar o banco de dados
// Query Builder: usar a linguagem do js para acessar banco de dados






