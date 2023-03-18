import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';

function App() {

  const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=9c70e0793023b5faae872affa0527db9';
  const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=9c70e0793023b5faae872affa0527db9&query='

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + term)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  };

  console.log(movies);
  console.log(term);
  return (
    <div className="App">
      <div className='serchNav'>
        <h1>Movies</h1>
      </div>

      <div>
        <form onSubmit={handleSearch}>
          <input onChange={(e) => setTerm(e.target.value)}/>
          <button>Search</button>
        </form>
      </div>

      <div className='movies'>
        {movies.map((movie) =>
          <MovieCard {...movie}/>
        )}
      </div>
    </div>
  );
}

export default App;
