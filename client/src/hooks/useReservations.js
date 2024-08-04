import { useEffect, useState } from "react";
import moviesAPI from "../api/moviesApi";

export function useGetUserReservationsData(userId) {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getUserReservations(userId);
            setReservations(result);
        })()
    }, [])

    return reservations;
}

export async function usePostUserReservation({ movie, showtime, selectedSeats, takenSeats, accessToken }) {
    const useReservationData = {
        movieId: movie._id,
        movieTittle: movie.title,
        movieImage: movie.imageUrl,
        showtimeId: showtime._id,
        showtime: showtime.time,
        seats: selectedSeats,
    }

    const allSeats = takenSeats.concat(selectedSeats);

    await moviesAPI.updateShowtime(showtime, allSeats);
    await moviesAPI.createUserReservation(useReservationData, accessToken);

    return;
}