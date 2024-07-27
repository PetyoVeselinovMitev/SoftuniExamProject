import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { serverLogout } from "../../api/authApi";

export default function Logout() {
    const { clientLogout, accessToken } = useContext(AuthContext);

    useEffect(() => {
        serverLogout(accessToken)
        clientLogout();
    }, [])
  
    return (
        <Navigate to="/" />
    )
    
    
}