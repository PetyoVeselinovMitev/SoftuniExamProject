import { useEffect, useState } from "react";
import moviesAPI from "../api/moviesApi";

export function useGetAllMovies(setLoading) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getAll()
            setMovies(result);
            setLoading(false);
        })()
    }, [])

    return [movies, setMovies, setLoading]
}

export function useGetRecentMovies(setLoading) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getAll();
            setMovies(result.reverse().slice(0, 3));
            setLoading(false);
        })()
    }, [])

    return [movies, setMovies]
}