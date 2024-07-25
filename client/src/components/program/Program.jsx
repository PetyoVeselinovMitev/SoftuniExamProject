import { useEffect, useState } from 'react';
import './Program.css';
import moviesAPI from '../../api/moviesApi';
import Spinner from '../spinner/Spinner';
import Movie from './movie/Movie';

export default function Program() {
    const [movies, setMovies] = useState({});
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getAll();
            setMovies(result.reverse());
            setLoading(false);
        })()
    }, []);

    return (
        <div className="program">
            <h1>Make your reservation</h1>
            {loading ? (
                <Spinner />
            ) : (
                movies.length > 0
                    ? movies.map(movie => <Movie key={movie._id} {...movie} />)
                    : <div className='msg'>
                        <h2>There are no movies yet.</h2>
                    </div>
            )}
        </div>
    );
}