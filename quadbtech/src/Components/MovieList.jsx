import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieSummary from "./MovieSummary";

function MovieList(props) {

    return (
        <div className="App">
            <h1>New Api</h1>
            {props.movies.map((movie) => (
                <div className="col-sm-6 mb-3 mb-sm-0" key={movie.show.id}>
                    <div className="d-flex card" style={{ width: '18rem', display: 'flex' }}>
                        <img src={movie.show.image?.medium} alt={movie.show.name} />
                        <div className="card-body">
                            <h2 className="card-title">{movie.show.name}</h2>
                            <h3 className="card-title">{movie.show.language}</h3>

                            <Link to={`/movie/${movie.show.id}`}>
                                <button className="btn btn-sm btn-primary">View Summary</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default MovieList;
