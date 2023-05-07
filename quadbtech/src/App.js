import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from 'react'
import MovieSummary from './Components/MovieSummary';
import MovieList from './Components/MovieList';
// import Navbar from './Components/Navbar';
import BookingForm from './Components/BookingForm';
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return (
    <div>


      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieSummary />} />
        <Route path="/book/:id" element={<BookingForm />} />
      </Routes>

    </div>
  )
}

export default App