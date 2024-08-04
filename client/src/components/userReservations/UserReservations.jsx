import { useContext } from 'react';
import './UserReservations.css';
import { AuthContext } from '../../contexts/AuthContext';
import { useGetUserReservationsData } from '../../hooks/useReservations';
import { Link } from 'react-router-dom';

export default function UserReservations() {

    const { userId } = useContext(AuthContext);
    const userReservations = useGetUserReservationsData(userId);
    return (
        <div className="container">
            {userReservations.length === 0
                ? <div className='msg'>
                    <h2>You don't have any reservations.</h2>
                    <h3>Go to the <Link to="/program">Program</Link> to make a reservation.</h3>
                </div>
                : userReservations.map(reservation => {
                    return (
                        <div className="card" key={reservation._id}>
                            <img src={reservation.movieImage} />
                            <h3>{reservation.movieTitle}</h3>
                            <p>{reservation.showtime}</p>
                            <p>Seats: {reservation.seats.join(', ')}</p>
                            <div className="button-container">
                                <button className="edit-button">Edit</button>
                                <button className="delete-button">Delete</button>
                            </div>
                        </div>
                    )
                })

            }

        </div>
    )
}



