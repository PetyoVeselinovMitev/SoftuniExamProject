import './Reservation.css';

const Reservation = () => {
    const rows = ['A', 'B', 'C', 'D', 'E'];
    const columns = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div className="reservation-container">
            <div className="screen">Screen</div>
            <div className="seats-grid">
                {rows.map((row) =>
                    columns.map((column) => {
                        return (
                            <div className="seat" >
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