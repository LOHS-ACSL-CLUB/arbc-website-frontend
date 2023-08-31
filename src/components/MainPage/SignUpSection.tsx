import { Link } from "react-router-dom";
import "./SignUpSection.scss";

function SignUpSection() {
    return (
        <div className="sign-up-section">
            <div className="sign-up">
                <div className="centered">
                    <div className="texts">
                        <h2>Ready to sign up?</h2>
                        <p>
                            Fill out the registration form to save your spot at
                            the southern California Competition
                        </p>
                    </div>

                    <Link
                        to="https://forms.gle/jeHbp6dtFdqBPUDU8"
                        target="_blank"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUpSection;
