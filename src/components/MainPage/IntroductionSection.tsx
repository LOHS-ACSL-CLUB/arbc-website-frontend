import { Link } from "react-router-dom";
import "./IntroductionSection.scss";

function IntroductionSection() {
    return (
        <div className="introduction-section">
            <div className="texts">
                <h1>American Regional Biology Competition</h1>
                <p>
                    The first organization dedicated to fostering interest in
                    biology among high-school students through competition and
                    collaboration.
                </p>
                <Link to="https://forms.gle/jeHbp6dtFdqBPUDU8" target="_blank">
                    Register
                </Link>
            </div>
        </div>
    );
}

export default IntroductionSection;
