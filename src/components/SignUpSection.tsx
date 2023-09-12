import "./SignUpSection.scss";
import GradientButton from "./GradientButton";

function SignUpSection() {
    return (
        <div className="sign-up-section">
            <div className="texts">
                <h2>Ready to sign up?</h2>
                <p>
                    Fill out the registration form to save your spot at the
                    southern California Competition!
                </p>
            </div>

            {/* <Link to="https://forms.gle/jeHbp6dtFdqBPUDU8" target="_blank">
                Register
            </Link> */}
            <GradientButton
                width={155}
                height={55}
                onClick={() =>
                    window
                        .open("https://forms.gle/jeHbp6dtFdqBPUDU8", "_blank")
                        ?.open()
                }
            >
                Register
            </GradientButton>
        </div>
    );
}

export default SignUpSection;
