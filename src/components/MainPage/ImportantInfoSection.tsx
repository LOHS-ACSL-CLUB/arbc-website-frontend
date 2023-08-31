import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ImportantInfoSection.scss";

function ImportantInfoSection() {
    return (
        <div className="important-info-section">
            <div className="schedule">
                <h2>Schedule</h2>
                <div className="pill">April, 2023</div>
                <p>
                    <b>Times tentative:</b> Southern California Regional
                    Tournaments
                </p>
                <div className="pill">placeholder time</div>
                <p>
                    <b>Times tentative:</b> placeholder
                </p>
            </div>
            <div className="important-links">
                <h2>Important Links</h2>
                <p>
                    Have any questions?{" "}
                    <Link
                        to="mailto: arbcsoutherncal@gmail.com"
                        target="_blank"
                        className="email-link"
                    >
                        Feel free to email us
                    </Link>
                    <br />
                    Interested in joining the ARBC team?
                    <br />
                    <Link
                        to="mailto: arbcsoutherncal@gmail.com"
                        target="_blank"
                        className="email-link"
                    >
                        Reach out to us at arbcsoutherncal@gmail.com
                    </Link>
                </p>
                <Link
                    className="button"
                    to="https://discord.gg/eSjVY48G"
                    target="_blank"
                >
                    <div className="content">
                        <FaDiscord />
                        Join the Discord Server
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ImportantInfoSection;
