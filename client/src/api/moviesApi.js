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

const getOneMovie = async (movieId) => {
    const movie = await requester.get(BASE_URL + `/movies/${movieId}`);
    const showtimesResult = await requester.get(BASE_URL + `/showtimes?where=_movieId%3D%22${movieId}%22`);
    const showtimes = Object.values(showtimesResult);
    return { movie, showtimes };
}

const getShowtimeWithMovie = async (movieId) => {
    const result = await requester.get(BASE_URL + `/showtimes?where=_movieId%3D%22${movieId}%22&load=movie%3d_movieId%3Amovies`);
    const movieWithShowtime = Object.values(result);
    return movieWithShowtime;
}

const postNewMovie = async (title, summary, imageUrl, showtimes, accessToken) => {
    const newMovie = await requester.post(BASE_URL + '/movies', { title, summary, imageUrl }, accessToken);
    showtimes.split(', ').map(showtime => {
        requester.post(BASE_URL + '/showtimes', { _movieId: newMovie._id, time: showtime, seats: [] }, accessToken);
    })
    return;
}

const deleteMoive = async (movieId, accessToken) => {
    await requester.del(BASE_URL + `/movies/${movieId}`, null, accessToken);
    return;
}

const updateMovieWithShowTimes = async (accessToken, movieId, title, summary, imageUrl, showtimes) => {
    try {
        const result = await requester.get(BASE_URL + `/showtimes?where=_movieId%3D%22${movieId}%22`);

        result.map(showtime => {
            requester.del(BASE_URL + `/showtimes/${showtime._id}`, null, accessToken);
        })

        showtimes.split(', ').map(showtime => {
            requester.post(BASE_URL + '/showtimes', { _movieId: movieId, time: showtime, seats: [] }, accessToken);
        })

        requester.put(BASE_URL + `/movies/${movieId}`, { title, summary, imageUrl }, accessToken);
    } catch (error) {
        console.error(error.message);
        return;
    }
}

const getOneShowtime = async (showtimeId) => {
    const result = await requester.get(BASE_URL + `/showtimes/${showtimeId}`);
    return result;
}

const getUserReservations = async (userId) => {
    const result = await requester.get(BASE_URL + `/usersReservations?where=_ownerId%3D%22${userId}%22`);
    const reservations = Object.values(result);
    return reservations;
}

const moviesAPI = {
    getAllMovies,
    getRecent,
    getShowtimeWithMovie,
    postNewMovie,
    deleteMoive,
    getOneMovie,
    updateMovieWithShowTimes,
    getOneShowtime,
    getUserReservations
}

export default moviesAPI;