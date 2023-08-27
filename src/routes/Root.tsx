import { Outlet } from "react-router-dom";
import Navbar from "../components/MainPage/Navbar";

function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Root;
