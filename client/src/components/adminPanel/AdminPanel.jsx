import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useGetAllMoviesWithShowtimes } from '../../hooks/useMovies';
import './AdminPanel.css';

import Spinner from '../spinner/Spinner';
import MovieRow from './movieRow/MovieRow';

export default function AdminPanel() {
    const [loading, setLoading] = useState(true);
    const [movies] = useGetAllMoviesWithShowtimes(setLoading);

    return (
        <div className="movie-table-container">
            {loading ? (
                <Spinner />
            ) : (
                <>
                    {movies.length === 0 && <h2 className='msg'>There are no movies yet.</h2>}
                    <table className="movie-table">
                        <thead>
                            <tr>
                                <th>Thumbnail</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Projection Times</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.length > 0 && movies.map(movie => <MovieRow key={movie[0]._movieId} movie={movie} />)}
                        </tbody>
                    </table>
                    <div className="add-movie-btn">
                        <Link to="/admin/create">Add Movie</Link>
                    </div>
                </>
            )}


        </div>
    );
}