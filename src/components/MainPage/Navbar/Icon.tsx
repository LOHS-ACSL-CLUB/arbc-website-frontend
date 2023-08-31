import "./Icon.scss";
import socalLogo from "assets/Socal_Logo.png";

function Icon() {
    return (
        <div className="icon">
            <img src={socalLogo} className="logo" />
            <span>
                Southern California American Regional Biology Competition
            </span>
        </div>
    );
}

export default Icon;
