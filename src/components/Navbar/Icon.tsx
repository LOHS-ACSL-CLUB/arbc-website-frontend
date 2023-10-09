import "./Icon.scss";
import socalLogo from "assets/Socal_Logo.png";

function Icon() {
    return (
        <div className="icon">
            <img
                src={socalLogo}
                className="logo"
                onClick={() => (window.location.href = "/")}
            />
            <span>
                Southern California American Regional Biology Competition
            </span>
        </div>
    );
}

export default Icon;
