import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function BookingForm() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const booking = { name, email, phone, movieName: movie.name };
    localStorage.setItem('booking', JSON.stringify(booking));
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h4>Movie Booking Form</h4>
            </div>
            <div class="card-body">
              <h2>{movie.name}</h2>
              <form onSubmit={handleSubmit}>

                <div class="form-group">
                  <label for="Name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    class="form-control"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary btn-sm" >Book Ticket</button>
              </form>

            </div>

          </div>
          <br></br>
          <Link to="/"><button class="btn btn-primary btn-sm btn-primary">Back To Movie List</button></Link>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
