import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const x = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  console.log(x);
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${x.id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(movie);
  }
  useEffect(() => {
    getMovie();
  }, [])
  return <div>{loading ? (<h1> Loading...</h1 >) :
    (
      <div>
        <h1>{movie.title}</h1>
        <h2>{movie.year}</h2>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <p>{movie.description_full}</p>
      </div>
    )}</div>
}
export default Detail;