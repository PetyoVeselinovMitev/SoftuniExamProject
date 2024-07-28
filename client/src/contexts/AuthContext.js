import { createContext } from "react";

export const AuthContext = createContext({
    name: '',
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    isAdmin: false,
    changeAuthState: (authState = {}) => null,
    clientLogout: () => null
});