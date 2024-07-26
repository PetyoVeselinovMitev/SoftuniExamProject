import { useState } from 'react';
import './Program.css';

import Spinner from '../spinner/Spinner';
import Movie from './movie/Movie';

import { useGetAllMovies } from '../../hooks/useMovies';

export default function Program() {
    const [loading, setLoading] = useState(true);
    const [movies] = useGetAllMovies(setLoading);

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