import { useEffect } from "react";
import Register from "./Register";
import "./index.scss";
import FormPageTemplate from "components/Utils/FormPageTemplate";

function RegisterPage() {
    useEffect(() => {
        document.querySelector("html")?.classList.add("hide-scrollbar");

        return () => {
            document.querySelector("html")?.classList.remove("hide-scrollbar");
        };
    }, []);

    return (
        <FormPageTemplate className="register-page">
            <Register />
        </FormPageTemplate>
    );
}

export default RegisterPage;
