import "./IntroductionSection.scss";
import GradientButton from "components/GradientButton";

function IntroductionSection() {
    return (
        <div className="introduction-section">
            <div className="content">
                <h1>American Regional Biology Competition</h1>
                <p>
                    Organization dedicated to fostering interest in biology
                    among high-school students through competition and
                    collaboration
                </p>
                <GradientButton
                    width={155}
                    height={55}
                    onClick={() =>
                        window
                            .open(
                                "https://forms.gle/jeHbp6dtFdqBPUDU8",
                                "_blank"
                            )
                            ?.focus()
                    }
                >
                    Register
                </GradientButton>
            </div>
        </div>
    );
}

export default IntroductionSection;
