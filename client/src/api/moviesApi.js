import * as  requester from './requester';

const BASE_URL = 'http://localhost:3030/data/movies';

const getAll = async () => {
    const result = await requester.get(BASE_URL);
    const movies = Object.values(result)
    return movies;
}

const getRecent = async () => {
    const result = await requester.get(BASE_URL + '?sortBy=_createdOn%20desc&pageSize=3');
    const movies = Object.values(result)
    return movies;
}

const moviesAPI = {
    getAll,
    getRecent
}

export default moviesAPI;