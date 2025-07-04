const mysql = require('mysql2'); // Alterado de 'mysql' para 'mysql2'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Senha123',
  database: 'moviescontrol_new'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL com sucesso!');
});

module.exports = connection;
