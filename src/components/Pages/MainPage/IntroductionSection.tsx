import { useNavigate } from "react-router";
import "./IntroductionSection.scss";
import GradientButton from "components/Utils/GradientButton";

function IntroductionSection() {
    const navigate = useNavigate();

    return (
        <div className="introduction-section">
            <div className="content">
                <h1>
                    Southern California American Regional Biology Competition
                </h1>
                <p>
                    Organization dedicated to fostering interest in biology
                    among high-school students through competition and
                    collaboration
                </p>
                <GradientButton
                    width={155}
                    height={55}
                    onClick={() => navigate("/choose-registration")}
                >
                    Register
                </GradientButton>
            </div>
        </div>
    );
}

export default IntroductionSection;
