import { useNavigate, useParams } from "react-router-dom";
import movies from "../components/Movies";

const MoviePage = () => {
  const { id } = useParams();
  // Here you would typically fetch the movie details using the id
  // For now, we will just log the id to the console
  // console.log("Movie ID:", id);

  const navigate = useNavigate();
  // This is used to navigate back to the previous page or home page

  const movie = movies.find((m) => m.id === Number(id));
  // Assuming movies is an array of movie objects with an id property
  return (
    <>
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title={movie.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <button onClick={() => navigate("/")}>Back Home</button>
      </div>
    </>
  );
};

export default MoviePage;


