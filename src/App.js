import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';

function App() {


  const API_POPULAR = 'https://api.themoviedb.org/3/movie/popular?api_key=9c70e0793023b5faae872affa0527db9';
  const API_UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming?api_key=9c70e0793023b5faae872affa0527db9';
  const API_TOP = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9c70e0793023b5faae872affa0527db9';
  const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=9c70e0793023b5faae872affa0527db9&query=';

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(API_POPULAR)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + term)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  };

  const handleUpcoming =() => {
    fetch(API_UPCOMING)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  };

  const handlePopular =() => {
    fetch(API_POPULAR)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  };

  const handleTop =() => {
    fetch(API_TOP)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  };

  console.log(movies);
  console.log(term);
  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>Movies</h1>
        <button onClick={handleUpcoming}>Upcoming</button>
        <button onClick={handlePopular}>Popular</button>
        <button onClick={handleTop}>Top Rated</button>
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
