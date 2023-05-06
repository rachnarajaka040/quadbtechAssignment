import React from 'react'
import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
const MovieSummary = () => {
    const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  return (
    <div>
        <p>{movie.summary}</p>
      <Link to={`/book/${id}`}>
        <button className="btn btn-sm btn-primary">Book ticket</button>
      </Link>
        
    </div>
  )
}

export default MovieSummary



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function MovieSummary() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     axios.get(`https://api.tvmaze.com/shows/${id}`)
//       .then(response => {
//         setMovie(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, [id]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{movie.name}</h1>
//       <img src={movie.image.medium} alt={movie.name} />
//       <p>{movie.summary}</p>
//       <button>Book Ticket</button>
//     </div>
//   );
// }

// export default MovieSummary;



