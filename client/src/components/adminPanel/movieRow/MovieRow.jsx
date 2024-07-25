export default function MovieRow({
    title,
    summary,
    imageUrl,
    times,
    _id
}) {
    return (
        <tr>
            <td><img src={imageUrl} className="movie-thumbnail" /></td>
            <td>{title}</td>
            <td>{summary}</td>
            <td className="projection-times">{times.toString()}</td>
            <td>
                <div className="button-wrapper">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </td>
        </tr>
    )
}