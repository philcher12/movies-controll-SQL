const express = require('express');
const cors = require('cors');
const connection = require('./database/connection');

const server = express();

server.use(cors());
server.use(express.json());

require('./routes/routes.js')(server);

server.listen(5000, () => {
  console.log('Servidor rodando em: http://localhost:5000');
});
