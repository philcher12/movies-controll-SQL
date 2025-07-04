module.exports = (server) => {
  const connection = require('../database/connection');

  // Rota raiz
  server.get('/', (req, res) => {
    res.json({ message: 'Bem vindo ao catálogo de séries e filmes' });
  });

  // Rota /movies
  server.get('/movies', (req, res) => {
    console.log('Rota /movies foi chamada');
    const sql = 'SELECT * FROM movies';
    connection.query(sql, (error, results) => {
      if (error) {
        console.error('Erro ao consultar o banco:', error);
        return res.status(500).json({ error: 'Erro no servidor ao buscar filmes' });
      }
      console.log('Filmes encontrados:', results);
      res.json(results);
    });
  });
};