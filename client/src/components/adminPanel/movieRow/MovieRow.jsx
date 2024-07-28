export default function MovieRow(movie) {
    const times = [];

    movie.movie.map(showtime => {
        times.push(showtime.time);
    })

    return (
        <tr>
            <td><img src={movie.movie[0].movie.imageUrl} className="movie-thumbnail" /></td>
            <td>{movie.movie[0].movie.title}</td>
            <td>{movie.movie[0].movie.summary}</td>
            <td className="projection-times">{times.map((time, index) => (
                <button disabled key={index} className="times">{time}</button>
            ))}</td>
            <td>
                <div className="button-wrapper">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </td>
        </tr>
    )
}