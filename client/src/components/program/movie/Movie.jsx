export default function Movie({
    title,
    summary,
    imageUrl,
    times
}) {
    return (
        <div className="movie-card">
        <div className="thumbnail">
            <img src={imageUrl} />
        </div>
        <div className="movie-info">
            <h3>{title}</h3>
            <p>{summary}</p>
            <div className="movie-times">
                {times.map((time, index) => (
                    <button key={index} className="time-btn">{time}</button>
                ))}
            </div>
        </div>
    </div>
    )
}