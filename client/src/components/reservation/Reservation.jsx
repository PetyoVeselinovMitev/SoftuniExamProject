import { useLocation } from 'react-router-dom';
import './Reservation.css';

const Reservation = () => {
    const rows = ['A', 'B', 'C', 'D', 'E'];
    const columns = [1, 2, 3, 4, 5, 6, 7];
    const location = useLocation();
    const {movie, showtime} = location.state;

    return (
        <div className="reservation-container">
            <div className="movie-card">
                <img src={movie.imageUrl} className="movie-thumbnail" />
                <div className="movie-info">
                    <h2 className="movie-title">{movie.title}</h2>
                    <p className="movie-summary">{movie.summary}</p>
                    <h3>Showtime: {showtime.time}</h3>
                </div>
            </div>
            <div className="screen">Screen</div>
            <div className="seats-grid">
                {rows.map((row) =>
                    columns.map((column) => {
                        return (
                            <div className="seat" key={`${row}${column}`}>
                                {row}{column}
                            </div>
                        );
                    })
                )}
            </div>
            <button className="finish-reservation-btn">Finish Reservation</button>
        </div>
    );
};

export default Reservation;