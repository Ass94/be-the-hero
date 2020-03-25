// importando express
const express = require('express'); 

// importando cors (seguraça)
const cors = require('cors');

// importando rotas
const routes = require('./routes');

// criando aplicação
const app = express();

// usando cors
app.use(cors());

// usar json no corpo da requisição
app.use(express.json());

// usar rotas
app.use(routes);

// Ouvindo na porta:3333
app.listen(3333);

// Executar projeto: node index.js
// Navegador: localhost:3333
