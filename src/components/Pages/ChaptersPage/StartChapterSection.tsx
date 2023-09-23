import "./StartChapterSection.scss";
import GradientButton from "components/Utils/GradientButton";

function StartChapterSection() {
    return (
        <div className="start-chapter-section">
            <div className="content">
                <h2>Start a Chapter</h2>
                <p>
                    Start an ARBC chapter at your school and gain access to
                    practice material, support, and more from our team!
                </p>
                <GradientButton
                    width={216}
                    height={55}
                    onClick={() =>
                        window
                            .open(
                                "https://docs.google.com/forms/d/1sjg-nlGddNjsCz5EK3pXgi-L0iDX5E_Cx05EQQ_xepc/viewform?edit_requested=true",
                                "_blank"
                            )
                            ?.focus()
                    }
                >
                    Start a Chapter
                </GradientButton>
            </div>
        </div>
    );
}

export default StartChapterSection;
