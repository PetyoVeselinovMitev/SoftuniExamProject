import './ReservationModal.css';

export default function ReservationModal({ show, onClose, onConfirm, selectedSeats, movie, showtime }) {
    if (!show) {
        return null;
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Confirm Reservation</h2>
                <div className="movie-card">
                    <div className="thumbnail">
                        <img src={movie.imageUrl} />
                    </div>
                    <div className="movie-info">
                        <p>
                            Are you sure you want to reserve
                            {selectedSeats.length > 1 ? ' seats ' : ' seat '}
                            <h4>{selectedSeats.join(', ')}</h4>
                            for <h4>{movie.title}</h4> at {showtime.time}
                        </p>
                    </div>
                </div>
                <div className="modal-actions">
                    <div className='button-container'>
                        <button className='modal-btn' onClick={onConfirm}>Finish Reservation</button>
                        <button className='modal-btn' onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}