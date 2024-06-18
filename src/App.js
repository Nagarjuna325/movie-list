import React, { useState } from 'react';
import { movies } from './data/movies';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import './index.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ rating: 'Any', category: 'Any' });

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = filter.rating === 'Any' || movie.rating >= filter.rating;
    const matchesCategory = filter.category === 'Any' || movie.category === filter.category;
    return matchesSearch && matchesRating && matchesCategory;
  });


  return (
    <div className="app">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter filter={filter} setFilter={setFilter} />
      {/* <MovieList movies={filteredMovies} /> */}
      {searchTerm && <MovieList movies={filteredMovies} />}
    </div>
  );
};

export default App;
