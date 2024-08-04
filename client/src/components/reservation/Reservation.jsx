import { Link, useLocation } from 'react-router-dom';
import './Reservation.css';
import { useState } from 'react';

const Reservation = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
    const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const location = useLocation();
    const { movie, showtime } = location.state;
    const [takenSeats, setTakenSeats] = useState(showtime.seats)
    const [selectedSeats, setSelectedSeats] = useState([]);
    const allSeats = takenSeats.concat(selectedSeats);

    const reservationSubmitHandler = () => {
        console.log('update showtime with new seats', allSeats);
        console.log('create user reservation', selectedSeats);
    }


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
            <button className="finish-reservation-btn" onClick={reservationSubmitHandler}>Finish Reservation</button>
            <Link to={'/program'}><button className="finish-reservation-btn">Cancel</button></Link>
        </div>
    );
};

export default Reservation;