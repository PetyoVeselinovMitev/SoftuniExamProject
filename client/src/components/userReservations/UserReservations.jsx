import './UserReservations.css';

export default function UserReservations() {
    return (
        <div className="container">
            <div className="card">
                <img src="https://m.media-amazon.com/images/M/MV5BOWFlNzViNWMtMjBlMS00NGNkLTk5ZTktNjExODQyYzEzZDBjXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg" alt="Movie 1" />
                <h3>Insidious: The Last Key</h3>
                <p>Time: 16:00</p>
                <p>Seats: C5, C6</p>
                <div className="button-container">
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                </div>
            </div>
        </div>
    )
}

