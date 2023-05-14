
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, title, summary, coverImg, genres }) {
  return <div className={styles.movie}>
    <img src={coverImg} alt={title} className={styles.movie__img} />
    <h2 className={styles.movie__title}>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <p>{summary}</p>
    <ul className={styles.movie__genres}>
      {genres.map((genre, index) => <li key={index}>{genre}</li>)}
    </ul>
  </div>;
}


export default Movie;