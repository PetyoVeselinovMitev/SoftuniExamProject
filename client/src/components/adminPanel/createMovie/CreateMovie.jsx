import { useContext, useState } from 'react';
import './CreateMovie.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { usePostNewMovie } from '../../../hooks/useMovies';
import { AuthContext } from '../../../contexts/AuthContext';

const initialValues = {
    title: '',
    summary: '',
    imageUrl: '',
    showtimes: []
}

export default function CreateMovie() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateShowtimes = (showtimes) => {
        const regex = /^(\d{2}:\d{2})(,\s*\d{2}:\d{2})*$/;
        return regex.test(showtimes);
    };
    
    const { accessToken } = useContext(AuthContext)

    const createMovieHandler = async ({ title, summary, imageUrl, showtimes }) => {
        
        if (!title || !summary || !imageUrl || !showtimes) {
            setError('All fields are required!');
            return;
        }
        if (!validateShowtimes(showtimes)) {
            setError('Showtimes must be in the format 21:30, 22:30, ...');
            return;
        }

        try {
            await usePostNewMovie(title, summary, imageUrl, showtimes, accessToken);
            navigate('/admin');
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, createMovieHandler)

    return (
        <form className="create-movie-form" onSubmit={submitHandler}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={values.title}
                onChange={changeHandler}
            />

            <label htmlFor="summary">Summary:</label>
            <textarea
                id="summary"
                name="summary"
                value={values.summary}
                onChange={changeHandler}
            />

            <label htmlFor="imageUrl">Image URL:</label>
            <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={values.imageUrl}
                onChange={changeHandler}
            />

            <label htmlFor="showtime">Showtimes: </label>
            <input
                type="text"
                id="showtimes"
                name="showtimes"
                placeholder='23:59, 23:59, 23:59'
                value={values.showtimes}
                onChange={changeHandler}
            />

            {error && (
                <p className='error'>
                    <span>{error}</span>
                </p>
            )}
            <button type="submit">Add Movie</button>
            <Link to={'/admin'}><button>Cancel</button></Link>
        </form>
    );
};
