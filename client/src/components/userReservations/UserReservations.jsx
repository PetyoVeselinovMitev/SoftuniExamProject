import './UserReservations.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useGetUserReservationsData } from '../../hooks/useReservations';
import { Link } from 'react-router-dom';

export default function UserReservations() {

    const { userId } = useContext(AuthContext);
    const userReservations = useGetUserReservationsData(userId);
    return (
        <>
            <h1>Your reservations.</h1>
            <div className="container">
                {userReservations.length === 0
                    ? <div className='msg'>
                        <h2>You don't have any reservations.</h2>
                        <div className='button-container'>
                            <Link to='/program'><button className='program-btn'>Go to Program</button></Link>
                        </div>
                    </div>
                    : userReservations.map(reservation => {
                        return (
                            <div className="card" key={reservation._id}>
                                <img src={reservation.movieImage} />
                                <h2>{reservation.movieTittle}</h2>
                                <p>Showtime: {reservation.showtime}</p>
                                <p>Seats: {reservation.seats.join(', ')}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}



