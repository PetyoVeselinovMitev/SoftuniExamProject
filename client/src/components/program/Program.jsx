import React from 'react';
import './Program.css';

const movies = [
    {
        id: 1,
        title: "Insidious: The Last Key",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BOWFlNzViNWMtMjBlMS00NGNkLTk5ZTktNjExODQyYzEzZDBjXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
        description: "Elise Rainier, who claims to see ghosts, is haunted by her past as she is drawn back to her old ghostly home. However, things change after her family is pitted against an evil force.",
        times: ["12:00", "14:00", "16:00", "18:00"],
    },
    {
        id: 2,
        title: "Tarot",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BODY0OTY1ZTktYTE4OC00MTFjLWE1YjAtZjMxNzk3MjYzMGJkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
        description: "Friends unwittingly unleash an unspeakable evil trapped within a cursed deck of tarot cards. One by one, they come face to face with fate, racing against death to escape the future foretold in their readings.",
        times: ["13:00", "15:00", "17:00", "20:00"],
    },
    {
        id: 3,
        title: "Evil Dead Rise",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_.jpg",
        description: "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
        times: ["19:00", "21:00"],
    },

];

export default function Program() {
    return (
        <div className="program">
            <h1>Today's movies</h1>
            <h2>Make your reservation</h2>
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <div className="thumbnail">
                        <img src={movie.thumbnail} alt={movie.title} />
                    </div>
                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                        <div className="movie-times">
                            {movie.times.map((time, index) => (
                                <button key={index} className="time-btn">{time}</button>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <div className='msg'>
                <h1>There are no movies yet.</h1>
            </div>
        </div>
    );
}