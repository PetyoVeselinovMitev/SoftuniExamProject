import { useContext } from "react";
import { login } from "../api/authApi"
import { AuthContext } from "../contexts/AuthContext";

export const useUserLogin = () => {
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        
        changeAuthState(result);
    };

    return loginHandler;
}