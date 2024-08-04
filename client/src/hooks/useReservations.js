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
   
    return reservations ;
}