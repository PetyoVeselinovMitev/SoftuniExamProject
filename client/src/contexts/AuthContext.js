import { createContext } from "react";

export const AuthContext = createContext({
    name: '',
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null
});