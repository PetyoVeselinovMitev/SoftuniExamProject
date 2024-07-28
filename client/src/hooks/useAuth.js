import { useContext } from "react";
import { login, register } from "../api/authApi"
import { AuthContext} from "../contexts/AuthContext"

export const useUserLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        
        changeAuthState(result);
        
        return result;
    };

    return loginHandler;
}

export const useUserRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password, name ) => {
        const result = await register(email, password, name );

        changeAuthState(result);

        return result;
    };

    return registerHandler;
}