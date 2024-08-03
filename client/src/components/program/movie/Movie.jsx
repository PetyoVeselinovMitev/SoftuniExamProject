import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Movie(movie) {
    const { isAdmin } = useContext(AuthContext);
    const times = [];

    movie.movie.map(showtime => {
        times.push(showtime.time);
    })

    return (
        <div className="movie-card">
            <div className="thumbnail">
                <img src={movie.movie[0].movie.imageUrl} />
            </div>
            <div className="movie-info">
                <h3>{movie.movie[0].movie.title}</h3>
                <p>{movie.movie[0].movie.summary}</p>
                <div className="movie-times">
                    {isAdmin
                        ? times.map((time, index) => (
                            <button disabled key={index} className="time-btn">{time}</button>
                        ))
                        : times.map((time, index) => (
                            <Link to={`/program/${movie.movie[0].movie._id}/${time}`} state={movie.movie[0].movie}>
                                <button key={index} className="time-btn">{time}</button>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}