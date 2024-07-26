import { login } from "../api/authApi"

export const useUserLogin = () => {
    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        console.log(result);
    }

    return loginHandler
}