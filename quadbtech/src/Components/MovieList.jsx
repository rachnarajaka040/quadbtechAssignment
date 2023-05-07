
import { Link } from "react-router-dom";
function MovieList(props) {

    return (
        <div className="container">
            <div class="card-header bg-primary text-white text-center mx-auto p-2" style={{ margin: "10px" }}>
                <h4>*** Movie List ***</h4>
            </div>
            <div className="row">
                {props.movies.map((movie) => (
                    <div className="col-md-3" key={movie.show.id}>
                        <div className="card mb-3 shadow-sm">
                            <img className="card-img-top" src={movie.show.image?.medium ? movie.show.image?.medium : "https://m.media-amazon.com/images/M/MV5BYjVjYjUzMTktNGFkMi00ZjhmLWI2MGUtYzVkMzY4NmNkYmY4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg"} alt={movie.title} />
                            <div className="card-body">
                                <h2 className="card-title">{movie.show.name}</h2>
                                <h3 className="card-title">{movie.show.language}</h3>

                                <h3 className="card-title">{movie.show.premiered}</h3>
                                <h3 className="card-title">{movie.show.schedule.time}</h3>

                                <Link to={`/movie/${movie.show.id}`}>
                                    <button className="btn btn-sm btn-primary">View Summary</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;
