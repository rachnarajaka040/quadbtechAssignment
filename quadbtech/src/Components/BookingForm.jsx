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
    <div>
     
      <h2>{movie.name}</h2>
      <form onSubmit={handleSubmit}>
        <h3>Book Ticket</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <button type="submit">Book Ticket</button>
      </form>
      <Link to="/">Back to Movie List</Link>
    </div>
  );
}

export default BookingForm;
