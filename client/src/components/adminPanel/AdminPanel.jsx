import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useGetAllMoviesWithShowtimes } from '../../hooks/useMovies';
import './AdminPanel.css';
import { AuthContext } from '../../contexts/AuthContext';

import Spinner from '../spinner/Spinner';
import MovieRow from './movieRow/MovieRow';
import moviesAPI from '../../api/moviesApi';
import DeleteModal from './deleteModal/DeleteModal';

export default function AdminPanel() {
    const [loading, setLoading] = useState(true);
    const [reinitialize, setReinitialize] = useState(false);
    const [movies] = useGetAllMoviesWithShowtimes(setLoading, reinitialize);
    const { accessToken } = useContext(AuthContext);
    const [movieToDelete, setMovieToDelete] = useState({});
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()

    const handleDeleteClick = (movie) => {
        setMovieToDelete(movie);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setMovieToDelete({});
    };

    const handleConfirmDelete = async (movie) => {
        try {
            await moviesAPI.deleteMoive(movie[0]._movieId, accessToken);
            navigate('/admin');
            handleCloseModal();
            setReinitialize(!reinitialize);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="admin-panel-wrapper">
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
                                {movies.length > 0 && movies.map(movie =>
                                    <MovieRow
                                        key={movie[0]._movieId}
                                        movie={movie}
                                        onDelete={() => handleDeleteClick(movie)}
                                    />
                                )}
                            </tbody>
                        </table>
                        <div className="add-movie-btn">
                            <Link to="/admin/create">Add Movie</Link>
                        </div>
                    </>
                )}
            </div>
            <DeleteModal
                show={showModal}
                onClose={handleCloseModal}
                onConfirm={() => handleConfirmDelete(movieToDelete)}
                movie={movieToDelete}
            />
        </div>
    );
}