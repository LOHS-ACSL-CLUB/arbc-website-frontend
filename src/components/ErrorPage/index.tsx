import { useRouteError } from "react-router-dom";
import "./index.scss";

type Error = {
    statusText?: string;
    message?: string;
};

function ErrorPage() {
    const error = useRouteError() as Error;
    console.error(error);

    return (
        <div className="error-page">
            <h2>Page Does Not Exist!</h2>
            <p>
                Sorry, this page does not exist. If you think there is a
                mistake, please contact us
            </p>
        </div>
    );
}

export default ErrorPage;
