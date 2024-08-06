import './Home.css';

import RecentMovie from './recentMovie/RecentMovie';
import Spinner from '../spinner/Spinner';

import { useGetRecentMovies } from '../../hooks/useMovies';
import { useState } from 'react';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [recentMovies] = useGetRecentMovies(setLoading);

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