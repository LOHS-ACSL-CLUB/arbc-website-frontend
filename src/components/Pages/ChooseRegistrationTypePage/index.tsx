import icon from "assets/choose-registration/icon.png";
import FormPageTemplate from "components/Utils/FormPageTemplate";
import "./index.scss";
import { Link } from "react-router-dom";

function ChooseRegistrationTypePage() {
    return (
        <FormPageTemplate className="choose-registration-type-page">
            <div className="buttons">
                <Link to="/register">
                    <img src={icon} alt="button icon" />
                    Member Registration
                </Link>
                <Link to="/team-register">
                    <img src={icon} alt="button icon" />
                    <div className="text">
                        Team Registration
                        <p className="notice">
                            (individual members must register first)
                        </p>
                    </div>
                </Link>
            </div>
        </FormPageTemplate>
    );
}

export default ChooseRegistrationTypePage;
