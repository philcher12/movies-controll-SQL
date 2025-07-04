import { useEffect, useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const url = "http://localhost:5000/movies";
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  return (
    <table className="striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Episódios</th>
          <th>Episódio atual</th>
          <th>Visto por último</th>
        </tr>
      </thead>

      <tbody>
        {movies.map(movie => {
          let type = movie.type === 0 ? 'Série' : 'Filme';

          // Proteção para caso movie.last_view seja null ou undefined
          let formatDate = movie.last_view ? movie.last_view.split('T', 1)[0] : '';

          return (
            <tr key={movie.id}>
              <td>{movie.name}</td>
              <td>{type}</td>
              <td>{movie.total_ep}</td>
              <td>{movie.atual_ep}</td>
              <td>{formatDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MovieList;
