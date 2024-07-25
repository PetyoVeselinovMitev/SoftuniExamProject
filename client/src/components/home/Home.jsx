// Home.jsx
import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <h1>Recent Movies</h1>
            <div className="card-container">
                <div className="card">
                    <img src="https://m.media-amazon.com/images/M/MV5BOWFlNzViNWMtMjBlMS00NGNkLTk5ZTktNjExODQyYzEzZDBjXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg" alt="Movie 1" />
                    <h3>Insidious: The Last Key</h3>
                    <p>Elise Rainier, who claims to see ghosts, is haunted by her past as she is drawn back to her old ghostly home. However, things change after her family is pitted against an evil force.</p>
                </div>
                <div className="card">
                    <img src="https://m.media-amazon.com/images/M/MV5BODY0OTY1ZTktYTE4OC00MTFjLWE1YjAtZjMxNzk3MjYzMGJkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg" alt="Movie 2" />
                    <h3>Tarot</h3>
                    <p>Friends unwittingly unleash an unspeakable evil trapped within a cursed deck of tarot cards. One by one, they come face to face with fate, racing against death to escape the future foretold in their readings.</p>
                </div>
                <div className="card">
                    <img src="https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_.jpg" alt="Movie 3" />
                    <h3>Evil Dead Rise</h3>
                    <p>A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.</p>
                </div>
            </div>
            <div className='msg'>
                <h2>There are no movies yet.</h2>
            </div>
        </div>
    );
}