import { useContext, useState } from "react";
import moviesAPI from "../../../api/moviesApi";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";


export default function MovieRow(movie) {
    const [deleted, setDeleted] = useState(false);
    const times = [];
    const { accessToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const movieDeleteHandler = async () => {
        await moviesAPI.deleteMoive(movie.movie[0]._movieId, accessToken);
        setDeleted(true);
        navigate('/admin');
    }

    movie.movie.map(showtime => {
        times.push(showtime.time);
    })

    if (deleted) {
        return null;
    } else {
        return (
            <tr>
                <td><img src={movie.movie[0].movie.imageUrl} className="movie-thumbnail-panel" /></td>
                <td>{movie.movie[0].movie.title}</td>
                <td>{movie.movie[0].movie.summary}</td>
                <td className="projection-times">{times.map((time, index) => (
                    <button disabled key={index} className="times">{time}</button>
                ))}</td>
                <td>
                    <div className="button-wrapper">
                        <Link to={`/admin/${movie.movie[0]._movieId}/edit`}><button className="edit-btn">Edit</button></Link>
                        <button className="delete-btn" onClick={movieDeleteHandler}>Delete</button>
                    </div>
                </td>
            </tr>
        )
    }
}