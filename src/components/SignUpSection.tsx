import "./SignUpSection.scss";
import GradientButton from "./Utils/GradientButton";
import { useNavigate } from "react-router";

function SignUpSection() {
    const navigate = useNavigate();

    return (
        <div className="sign-up-section">
            <div className="texts">
                <h2>Ready to sign up?</h2>
                <p>
                    Fill out the registration form to save your spot at the
                    southern California Competition!
                </p>
            </div>

            <GradientButton
                width={155}
                height={55}
                onClick={() => navigate("/register")}
            >
                Register
            </GradientButton>
        </div>
    );
}

export default SignUpSection;
