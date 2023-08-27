import "./Icon.scss";
import socalLogo from "../../../assets/Socal_Logo.png";

function Icon() {
    return (
        <div className="icon">
            <img src={socalLogo} className="logo" />
            Southern California American Regional Biology Olympiad
        </div>
    );
}

export default Icon;
