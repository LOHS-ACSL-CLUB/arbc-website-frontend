import { useNavigate, useRouteError } from "react-router-dom";
import "./index.scss";
import GradientButton from "components/GradientButton";

type Error = {
    statusText?: string;
    message?: string;
};

function ErrorPage() {
    const error = useRouteError() as Error;
    console.error(error);

    const navigate = useNavigate();

    return (
        <div className="error-page">
            <h2>Page Does Not Exist!</h2>
            <p>
                Sorry, this page does not exist. If you think there is a
                mistake, please contact us
            </p>
            <GradientButton
                width={200}
                height={60}
                onClick={() => navigate("/")}
            >
                Return to Home
            </GradientButton>
        </div>
    );
}

export default ErrorPage;
