import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateViewRouteGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to='/login' />
    } else {
        return <Outlet />
    }
}