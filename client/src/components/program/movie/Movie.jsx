export default function Movie(movie) {
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
                {times.map((time, index) => (
                    <button key={index} className="time-btn">{time}</button>
                ))}
            </div>
        </div>
    </div>
    )
}