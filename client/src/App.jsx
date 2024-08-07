import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Program from "./components/program/Program";
import AdminPanel from "./components/adminPanel/AdminPanel";
import Reservation from "./components/reservation/Reservation";
import UserReservations from "./components/userReservations/UserReservations";
import CreateMovie from "./components/adminPanel/createMovie/CreateMovie";
import Logout from "./components/logout/Logout";
import EditMovie from "./components/adminPanel/editMovie/EditMovie";
import PrivateViewRouteGuard from "./components/common/PrivateViewRouteGuard";
import AdminViewRouteGuard from "./components/common/AdminViewRouteGuard";
import PublicViewRouteGuard from "./components/common/PublicViewRouteGuard";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const clientLogout = () => {
        setAuthState({});
    }

    const contextData = {
        name: authState.name,
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        isAdmin: authState.email === 'cinema@admin.bg',
        changeAuthState,
        clientLogout
    }
    return (
        <>
            <AuthContext.Provider value={contextData}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/program" element={<Program />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route element={<PublicViewRouteGuard />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                    <Route element={<PrivateViewRouteGuard />}>
                        <Route path="/program/:movieId/:showtime" element={<Reservation />} />
                        <Route path="/user/reservations" element={<UserReservations />} />
                    </Route>
                    <Route element={<AdminViewRouteGuard />}>
                        <Route path="/admin" element={<AdminPanel />} />
                        <Route path="/admin/:movieId/edit" element={<EditMovie />} />
                        <Route path="/admin/create" element={<CreateMovie />} />
                    </Route>
                </Routes>
            </AuthContext.Provider>
        </>
    );
}

export default App;