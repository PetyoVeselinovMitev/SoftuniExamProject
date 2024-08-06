import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Reservation.css';
import { usePostUserReservation } from '../../hooks/useReservations';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Reservation = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
    const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const location = useLocation();
    const navigate = useNavigate()

    const { accessToken } = useContext(AuthContext)
    const [error, setError] = useState('');
    const { movie, showtime } = location.state;
    const [takenSeats, setTakenSeats] = useState(showtime.seats)
    const [selectedSeats, setSelectedSeats] = useState([]);

    const reservationSubmitHandler = async () => {
        if (selectedSeats.length === 0) {
            setError('Please select at least one seat');
            return;
        };

        try {
            await usePostUserReservation({ movie, showtime, selectedSeats, takenSeats, accessToken })
            navigate('/user/reservations')
        } catch (error) {
            setError(error.message);
            return;
        };
    };

    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const isSeatTaken = (seat) => {
        return takenSeats.includes(seat);
    };

    return (
        <div className="reservation-container">
            <div className="movie-card">
                <img src={movie.imageUrl} className="movie-thumbnail" />
                <div className="movie-info">
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-summary">{movie.summary}</p>
                </div>
                <div className="legend-container">
                <h2>Seat Legend</h2>
                <div className="legend-item">
                    <span className="seat legend-available"></span> Available
                </div>
                <div className="legend-item">
                    <span className="seat legend-reserved"></span> Reserved
                </div>
                <div className="legend-item">
                    <span className="seat legend-selected"></span> Selected
                </div>
            </div>
            </div>
            <div className="screen">Screen</div>
            <div className="seats-grid">
                {rows.map((row) =>
                    columns.map((column) => {
                        const seat = `${row}${column}`;
                        const isTaken = isSeatTaken(seat);
                        const isSelected = selectedSeats.includes(seat);
                        return (
                            <div
                                className={`seat ${isTaken ? 'taken' : ''} ${isSelected ? 'selected' : ''}`}
                                key={seat}
                                onClick={() => !isTaken && handleSeatClick(seat)}
                            >
                                {seat}
                            </div>
                        );
                    })
                )}
            </div>
            {error && <h2 className="error">{error}</h2>}
            <button className="finish-reservation-btn" onClick={reservationSubmitHandler}>Finish Reservation</button>
            <Link to={'/program'}><button className="finish-reservation-btn">Cancel</button></Link>
        </div>
    );
};

export default Reservation;