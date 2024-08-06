import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

export default function AdminViewRouteGuard() {
    const { isAdmin } = useContext(AuthContext);

    if (!isAdmin) {
        return <Navigate to='/login' />
    } else {
        return <Outlet />
    };
}