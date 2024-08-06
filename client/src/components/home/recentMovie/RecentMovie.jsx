export default function recentMovies({
    title,
    summary,
    imageUrl
}) {
    return (
        <div className="card">
            <img src={imageUrl} />
            <h2>{title}</h2>
            <p>{summary}</p>
        </div>
    )
}