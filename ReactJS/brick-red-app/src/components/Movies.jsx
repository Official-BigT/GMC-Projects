import React, { useState } from "react";
import { Link } from "react-router-dom";

// Dummy filled values
// const initialMovies = [
//   {
//     title: "Inception",
//     description: "A mind-bending thriller by Christopher Nolan.",
//     posterURL: "https://via.placeholder.com/150",
//     rating: 4.5,
//   },
//   {
//     title: "Interstellar",
//     description: "A sci-fi epic exploring time and space.",
//     posterURL: "https://via.placeholder.com/150",
//     rating: 5,
//   },
// ];

const AddMovie = ({ onAdd }) => {
  // To store the input values
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  // To update the form fields
  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };

  // Validates and send the new movie data upward via onAdd prop
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.rating) return; //Basic validation
    onAdd({ title: "", description: "", posterURL: "", rating: "" }); //Reset
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={handleChange}
        />
        <button type="submit">Add Movies</button>
      </form>
    </>
  );
};

const MovieCard = ({ movie }) => {
  // to display each movie individual movie.
  return (
    <>
      <h2>{movie.title}</h2>
      <Link to={`movie/${movie.id}`}>
        <button>View Details</button>
      </Link>
      {/* <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        <img src={movie.posterURL} alt={movie.title} width="150" />{" "}
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <strong>Rating: {movie.rating}</strong>
      </div> */}
    </>
  );
};

const MovieList = ({ movies }) => {
  // to list all filtered movies
  return (
    <>
      {/* movies.map() – loops through the movie array.
<MovieCard {...movie} /> – spreads all movie properties as props.
key={i} – helps React optimize rendering; not ideal for real apps, but fine for this. */}

      <div className="movie-list">
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </>
  );
};
const Filter = ({ onTitleChange, onRateChange }) => {
  // for search and rating input, Filters movies by title and rating.
  return (
    <>
      {/* onTitleChange, onRatingChange – are callback props. 
    onChange fires the appropriate parent update handler.
    The input’s value is passed up for filtering in the parent (Movies component). */}
      <div className="filter">
        <input
          type="text"
          placeholder="Search by title"
          onChange={(e) => onTitleChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="Minimum rating"
          onChange={(e) => onRateChange(Number(e.target.value))}
        />
      </div>
    </>
  );
};

const Movies = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://via.placeholder.com/150",
      trailer: "https://youtu.be/LifqWf0BAOA?si=3vPatUX3D4tLx28e",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Interstellar",
      description: "A sci-fi epic exploring time and space.",
      posterURL: "https://via.placeholder.com/150",
      trailer: "https://youtu.be/zSWdZVtXT7E?si=SrF-9Ibjx9Crd5aA",
      rating: 5,
    },
  ]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );
  return (
    <>
      <div>
        <Filter onTitleChange={setFilterTitle} onRateChange={setFilterRate} />
        <MovieList movies={filteredMovies} />
        <AddMovie onAdd={(movie) => setMovies([...movies, movie])} />
      </div>
    </>
  );
};

export default Movies;
