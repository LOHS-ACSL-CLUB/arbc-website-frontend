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
                    Single Person Registration
                </Link>
                <Link to="/team-register">
                    <img src={icon} alt="button icon" />
                    Team Registration
                </Link>
            </div>
        </FormPageTemplate>
    );
}

export default ChooseRegistrationTypePage;
