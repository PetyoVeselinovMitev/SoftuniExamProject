import { post } from "./requester";

const BASE_URL = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const authData = await post(`${BASE_URL}/login`, { email, password });
    return authData;
}