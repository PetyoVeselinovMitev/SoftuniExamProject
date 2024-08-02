import * as  requester from './requester';

const BASE_URL = 'http://localhost:3030/data';

const getAllMovies = async () => {
    const result = await requester.get(BASE_URL + '/movies');
    const movies = Object.values(result);
    return movies;
}

const getRecent = async () => {
    const result = await requester.get(BASE_URL + '/movies?sortBy=_createdOn%20desc&pageSize=3');
    const movies = Object.values(result);
    return movies;
}

const getShowtimeWithMovie = async (movieId) => {
    const result = await requester.get(BASE_URL + `/showtimes?where=_movieId%3D%22${movieId}%22&load=movie%3d_movieId%3Amovies`);
    const movieWithShowtime = Object.values(result);
    return movieWithShowtime;
}

const postNewMovie = async (title, summary, imageUrl, showtimes, accessToken) => {
    const newMovie = await requester.post(BASE_URL + '/movies', { title, summary, imageUrl }, accessToken);
    showtimes.split(', ').map(showtime => {
        requester.post(BASE_URL + '/showtimes', { _movieId: newMovie._id, time: showtime }, accessToken);
    })
    return;
}

const deleteMoive = async (movieId, accessToken) => {
    console.log(movieId, accessToken);
    await requester.del(BASE_URL + `/movies/${movieId}`,null, accessToken);
    return;
}

const moviesAPI = {
    getAllMovies,
    getRecent,
    getShowtimeWithMovie,
    postNewMovie,
    deleteMoive
}

export default moviesAPI;