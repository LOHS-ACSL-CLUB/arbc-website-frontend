import socalLogo from "assets/Socal_Logo.png";
import axios from "axios";
import useMultistepForm from "hooks/useMultistepForm";
import { FormEvent, useState } from "react";
import "./Register.scss";
import PersonalInformationForm, {
    ShowValidations,
} from "./RegisterForm/PersonalInformationForm";
import ProfileDataForm from "./RegisterForm/ProfileDataForm";
import StepDisplay from "components/Utils/StepDisplay";
import { useNavigate } from "react-router-dom";

type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    schoolName: string;
    grade: number;
    city: string;
    phone: string;
};

const INITIAL_DATA: RegisterFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    schoolName: "",
    grade: 0,
    city: "",
    phone: "",
};

function Register() {
    const [data, setData] = useState(INITIAL_DATA);
    const [canSubmit, setCanSubmit] = useState(true);
    const navigate = useNavigate();

    const [showValidations, setShowValidations] = useState<ShowValidations>({
        email: false,
        password: false,
    });

    function updateFields(fields: Partial<RegisterFormData>) {
        setData(data => {
            return { ...data, ...fields };
        });
    }

    const { currentStepIndex, isFirstStep, next, back, isLastStep, step } =
        useMultistepForm([
            <PersonalInformationForm
                {...data}
                updateFields={updateFields}
                setCanSubmit={setCanSubmit}
                showValidations={showValidations}
                setShowValidations={setShowValidations}
            />,
            <ProfileDataForm
                {...data}
                updateFields={updateFields}
                setCanSubmit={setCanSubmit}
            />,
        ]);

    async function onSubmit(event: FormEvent) {
        event.preventDefault();

        setShowValidations({ email: true, password: true });

        if (!canSubmit) {
            return;
        }

        if (!isLastStep) {
            next();
            return;
        }

        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value.toString());
        }

        try {
            alert("Registering... please click OK and wait for a moment.");

            await axios({
                method: "post",
                // url: "http://localhost:9000/new",
                url: "https://arbc-backend-pzrv.onrender.com/new",
                headers: { "Content-Type": "application/json" },
                data: formData,
            });

            alert(
                "Successfully registered! We have not yet opened up team registration but you will be able to add them soon."
            );
            navigate("/");
        } catch {
            alert(
                `Failed to register! Please try again later. If the problem persists, contact us at arbcsoutherncal@gmail.com`
            );
        }
    }

    return (
        <div className="register">
            <img src={socalLogo} className="socal-logo" />
            <h2>Register</h2>
            <StepDisplay
                currentStep={currentStepIndex + 1}
                steps={["Personal Information", "Profile Data"]}
            />
            <form onSubmit={onSubmit}>
                {step}
                <div className="buttons">
                    {!isFirstStep && (
                        <button
                            type="button"
                            onClick={back}
                            className="previous"
                        >
                            Previous
                        </button>
                    )}
                    <button type="submit" className="next">
                        {isLastStep ? "Submit" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
