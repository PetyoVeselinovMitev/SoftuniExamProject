import './EditMovie.css';
import { useContext, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useGetOneMovie } from '../../../hooks/useMovies';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Spinner from '../../spinner/Spinner';
import moviesAPI from '../../../api/moviesApi';

export default function EditMovie() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const { accessToken } = useContext(AuthContext)
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [movie] = useGetOneMovie(movieId, setIsLoading);

    const validateShowtimes = (showtimes) => {
        const regex = /^(\d{2}:\d{2})(,\s*\d{2}:\d{2})*$/;
        return regex.test(showtimes);
    };

    const moviesUpdateHandler = async ({ title, summary, imageUrl, showtimes }) => {

        if (!title || !summary || !imageUrl || !showtimes) {
            setError('All fields are required!');
            return;
        }
        if (!validateShowtimes(showtimes)) {
            setError('Showtimes must be in the format 21:30, 22:30, ...');
            return;
        }

        try {
            await moviesAPI.updateMovieWithShowTimes(accessToken, movieId, title, summary, imageUrl, showtimes);
            values.showtimes = [];
            navigate('/admin');
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    }

    const { changeHandler, submitHandler, values } = useForm(movie, moviesUpdateHandler);
    if (isLoading) {
        return <Spinner />
    } else {

        return (
            <div className='edit-container'>
                <form className="edit-form" onSubmit={submitHandler} >
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={changeHandler}
                        value={values.title || ''}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        id="summary"
                        name="summary"
                        onChange={changeHandler}
                        value={values.summary || ''}
                    />

                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        onChange={changeHandler}
                        value={values.imageUrl || ''}
                    />

                    <label htmlFor="showtime">Showtimes: </label>
                    <input
                        type="text"
                        id="showtimes"
                        name="showtimes"
                        placeholder='23:59, 23:59, 23:59'
                        onChange={changeHandler}
                        value={values.showtimes || []}
                    />
                    {error && (
                        <p className='error'>
                            <span>{error}</span>
                        </p>
                    )}
                    <div className='btn-container'>
                        <button className='btn' type="submit">Save Movie</button>
                        <Link to={'/admin'}><button className='btn'>Cancel</button></Link>
                    </div>
                </form>
            </div>
        );
    };
}