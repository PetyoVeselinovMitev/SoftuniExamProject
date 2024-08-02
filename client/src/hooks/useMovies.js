import { useEffect, useState } from "react";
import moviesAPI from "../api/moviesApi";

export function useGetAllMoviesWithShowtimes(setLoading) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getAllMovies();
            const moviesWithShowtimes = await Promise.all(result.reverse().map(async (movie) => {
                const data = await moviesAPI.getShowtimeWithMovie(movie._id);
                return data;
            }));
            setMovies(moviesWithShowtimes);
            setLoading(false);
        })();
    }, []);
    return [movies, setMovies, setLoading]
}

export function useGetRecentMovies(setLoading) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getRecent();
            setMovies(result);
            setLoading(false);
        })()
    }, [])

    return [movies, setMovies]
}

export function usePostNewMovie(title, summary, imageUrl, showtimes, accessToken) {
    moviesAPI.postNewMovie(title, summary, imageUrl, showtimes, accessToken);
}