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
        userId: authState.userId,
        email: authState.email,
        accessToken: authState.token,
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/program/movie/time" element={<Reservation />} />
                    <Route path="/user/reservations" element={<UserReservations />} />
                    <Route path="/admin/create" element={<CreateMovie />} />
                </Routes>
            </AuthContext.Provider>
        </>
    );
}

export default App;