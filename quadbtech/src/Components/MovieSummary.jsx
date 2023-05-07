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

            <div class="card-header bg-primary text-white text-center mx-auto p-2" style={{ margin: "10px" }}>
                <h4>*** Movie Summary ***</h4>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                <div class="bg-success p-2 text-dark bg-opacity-10" style={{ marginLeft: "20%", marginRight: "20%", fontSize: "30px", border: "2px solid gray ", padding: "10px", color: "white" }}>
                    <p>{movie.summary}</p>
                    <Link to={`/book/${id}`}>
                        <button class="btn btn-primary btn-lg btn-primary">Book ticket</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MovieSummary




