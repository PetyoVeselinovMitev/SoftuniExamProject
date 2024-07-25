import * as  requester from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/cinema';

export const getAll = async () => {
    const result = await requester.get(BASE_URL);
    const movies = Object.values(result)
    return movies;
}

const moviesAPI = {
    getAll
}

export default moviesAPI;