import { useEffect } from "react";
import Register from "./Register";
import "./index.scss";

function RegisterPage() {
    useEffect(() => {
        document.querySelector("html")?.classList.add("hide-scrollbar");

        return () => {
            document.querySelector("html")?.classList.remove("hide-scrollbar");
        };
    }, []);

    return (
        <div className="register-page">
            <Register />
        </div>
    );
}

export default RegisterPage;
