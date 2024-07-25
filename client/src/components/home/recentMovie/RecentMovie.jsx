export default function recentMovies({
    title,
    summary,
    imageUrl
}) {
    return (
        <div className="card">
            <img src={imageUrl} />
            <h3>{title}</h3>
            <p>{summary}</p>
        </div>
    )
}