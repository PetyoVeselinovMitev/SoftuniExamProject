import './EditMovie.css';

export default function EditMovie() {
    return (
        <form className="create-movie-form" >
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
            />

            <label htmlFor="summary">Summary:</label>
            <textarea
                id="summary"
                name="summary"
            />

            <label htmlFor="imageUrl">Image URL:</label>
            <input
                type="text"
                id="imageUrl"
                name="imageUrl"
            />

            <label htmlFor="showtime">Showtimes: </label>
            <input
                type="text"
                id="showtimes"
                name="showtimes"
                placeholder='23:59, 23:59, 23:59'
            />
            <p className='error'>
                <span>error</span>
            </p>
            <button type="submit">Add Movie</button>
        </form>
    );
};
