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
    console.log(title, summary, imageUrl, showtimes, accessToken);
}

const moviesAPI = {
    getAllMovies,
    getRecent,
    getShowtimeWithMovie,
    postNewMovie
}

export default moviesAPI;