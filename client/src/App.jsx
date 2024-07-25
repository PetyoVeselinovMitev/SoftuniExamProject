import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Program from "./components/program/Program";
import AdminPanel from "./components/adminPanel/AdminPanel";
import Reservation from "./components/reservation/Reservation";
import UserReservations from "./components/userReservations/UserReservations";
import CreateMovie from "./components/adminPanel/createMovie/CreateMovie";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/program" element={<Program />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/program/movie/time" element={<Reservation />} />
                <Route path="/user/reservations" element={<UserReservations />} />
                <Route path="/admin/create" element={<CreateMovie />} />
            </Routes>

        </>
    );
}

export default App;