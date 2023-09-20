import socalLogo from "assets/Socal_Logo.png";
import axios from "axios";
import useMultistepForm from "hooks/useMultistepForm";
import { FormEvent, useState } from "react";
import "./Register.scss";
import PersonalInformationForm from "./RegisterForm/PersonalInformationForm";
import ProfileDataForm from "./RegisterForm/ProfileDataForm";
import StepDisplay from "components/StepDisplay";

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
    grade: 9,
    city: "",
    phone: "",
};

function Register() {
    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(fields: Partial<RegisterFormData>) {
        setData(data => {
            return { ...data, ...fields };
        });
    }

    const { currentStepIndex, isFirstStep, next, back, isLastStep, step } =
        useMultistepForm([
            <PersonalInformationForm {...data} updateFields={updateFields} />,
            <ProfileDataForm {...data} updateFields={updateFields} />,
        ]);

    async function onSubmit(event: FormEvent) {
        event.preventDefault();

        if (!isLastStep) {
            next();
            return;
        }

        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value.toString());
        }

        try {
            await axios({
                method: "post",
                // url: "http://localhost:9000/new",
                url: "https://arbc-backend-pzrv.onrender.com/new",
                headers: { "Content-Type": "application/json" },
                data: formData,
            });

            alert("Sent Successful!");
        } catch {
            alert("Request Failed");
        }
    }

    return (
        <div className="register">
            <img src={socalLogo} className="socal-logo" />
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <StepDisplay
                    currentStep={currentStepIndex + 1}
                    steps={["Personal Information", "Profile Data"]}
                />
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
