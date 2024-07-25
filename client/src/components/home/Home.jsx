// Home.jsx
import { useEffect, useState } from 'react';
import './Home.css';

import moviesAPI from '../../api/moviesApi';
import RecentMovie from './recentMovie/RecentMovie';
import Spinner from '../spinner/Spinner';

export default function Home() {
    const [recentMovies, setRecentMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await moviesAPI.getAll();
            setRecentMovies(result.reverse().slice(0, 3));
            setLoading(false);
        })()
    }, [])

    return (
        <div className="home">
            <h1>Recent Movies</h1>
            <div className="card-container">
                {loading ? (
                    <Spinner />
                ) : (
                    recentMovies.length > 0
                        ? recentMovies.map(movie => <RecentMovie key={movie._id} {...movie} />)
                        : <div className='msg'>
                            <h2>There are no movies yet.</h2>
                        </div>
                )}
            </div>

        </div>
    );
}