import './CreateMovie.css';

export default function CreateMovie() {
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

            <label htmlFor="showtime1">Showtimes: </label>
            <div>
                <input
                    type="text"
                    id="showtimes"
                    name="showtimes"
                    placeholder='23:59'
                />
                <input
                    type="text"
                    id="showtimes"
                    name="showtimes"

                />
                <input
                    type="text"
                    id="showtimes"
                    name="showtimes"
                />
                <input
                    type="text"
                    id="showtimes"
                    name="showtimes"
                />
            </div>

            <button type="submit">Add Movie</button>
        </form>
    );
};
