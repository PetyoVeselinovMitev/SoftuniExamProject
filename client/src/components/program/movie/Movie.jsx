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
                        ? movie.movie.map((record) => (
                            <button disabled key={record._id} className="time-btn">{record.time}</button>
                        ))
                        : movie.movie.map((record) => (
                            <Link to={`/program/${movie.movie[0].movie._id}/${record.time}`}
                                state={{ movie: movie.movie[0].movie, showtime: record }}
                                key={record._id}
                            >
                                <button className="time-btn">{record.time}</button>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}