import { Link } from "react-router-dom";
import "./Icon.scss";
import socalLogo from "assets/Socal_Logo.png";

function Icon() {
    return (
        <div className="icon">
            <Link to="/">
                <img src={socalLogo} className="logo" />
            </Link>
            <span>
                Southern California American Regional Biology Competition
            </span>
        </div>
    );
}

export default Icon;
