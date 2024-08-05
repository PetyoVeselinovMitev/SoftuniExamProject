import { useState } from "react";
import { Link } from "react-router-dom";

export default function MovieRow({ movie, onDelete }) {
    const times = [];

    movie.map(showtime => {
        times.push(showtime.time);
    })

    return (
        <tr>
            <td><img src={movie[0].movie.imageUrl} className="movie-thumbnail-panel" /></td>
            <td>{movie[0].movie.title}</td>
            <td>{movie[0].movie.summary}</td>
            <td className="projection-times">{times.map((time, index) => (
                <button disabled key={index} className="times">{time}</button>
            ))}</td>
            <td>
                <div className="button-wrapper">
                    <Link to={`/admin/${movie[0].movie._movieId}/edit`}><button className="edit-btn">Edit</button></Link>
                    <button className="delete-btn" onClick={onDelete}>Delete</button>
                </div>
            </td>
        </tr>
    )
}