import './AdminPanel.css';

export default function AdminPanel() {

    return (
        <div className="movie-table-container">
            <table className="movie-table">
                <thead>
                    <tr>
                        <th>Thumbnail</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Projection Times</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="https://m.media-amazon.com/images/M/MV5BOWFlNzViNWMtMjBlMS00NGNkLTk5ZTktNjExODQyYzEzZDBjXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg" alt="Movie Thumbnail" className="movie-thumbnail" /></td>
                        <td>Insidious: The Last Key</td>
                        <td>Elise Rainier, who claims to see ghosts, is haunted by her past as she is drawn back to her old ghostly home. However, things change after her family is pitted against an evil force.</td>
                        <td className="projection-times">12:00 14:00 16:00 18:00</td>
                        <td>
                            <div className="button-wrapper">
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="https://m.media-amazon.com/images/M/MV5BODY0OTY1ZTktYTE4OC00MTFjLWE1YjAtZjMxNzk3MjYzMGJkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg" alt="Movie Thumbnail" className="movie-thumbnail" /></td>
                        <td>Tarot</td>
                        <td>Friends unwittingly unleash an unspeakable evil trapped within a cursed deck of tarot cards. One by one, they come face to face with fate, racing against death to escape the future foretold in their readings.</td>
                        <td className="projection-times">13:00 15:00 17:00 20:00</td>
                        <td>
                            <div className="button-wrapper">
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_.jpg" alt="Movie Thumbnail" className="movie-thumbnail" /></td>
                        <td>Evil Dead Rise</td>
                        <td>A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.</td>
                        <td className="projection-times">19:00 21:00</td>
                        <td>
                            <div className="button-wrapper">
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='msg'>
                <h2>There are no movies yet.</h2>
            </div>
            <button className="add-movie-btn">Add Movie</button>
        </div>
    );
}