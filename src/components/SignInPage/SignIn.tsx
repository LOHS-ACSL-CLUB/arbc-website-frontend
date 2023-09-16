import useMultistepForm from "hooks/useMultistepForm";
import "./SignIn.scss";
import PersonalInformationForm from "./RegisterForm/PersonalInformationForm";
import ProfileDataForm from "./RegisterForm/ProfileDataForm";
import { FormEvent, useState } from "react";
import axios from "axios";

type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    schoolName: string;
    grade: string;
    city: string;
};

const INITIAL_DATA: RegisterFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    schoolName: "",
    grade: "",
    city: "",
};

function SignIn() {
    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(fields: Partial<RegisterFormData>) {
        setData(data => {
            return { ...data, ...fields };
        });
    }

    const {
        steps,
        currentStepIndex,
        isFirstStep,
        next,
        back,
        isLastStep,
        step,
    } = useMultistepForm([
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
            formData.append(key, value);
        }

        try {
            await axios({
                method: "post",
                url: "https://arbc-backend-7w2y-iyciko8k8-par26.vercel.app/api/v1/members",
                headers: { "Content-Type": "multipart/form-data" },
                data: formData,
            });

            alert("Sent Successful!");
        } catch {
            alert("Request Failed");
        }
    }

    return (
        <div className="sign-in">
            <form onSubmit={onSubmit}>
                <p>
                    {currentStepIndex + 1} / {steps.length}
                </p>
                {step}
                <div className="buttons">
                    {!isFirstStep && (
                        <button type="button" onClick={back}>
                            Back
                        </button>
                    )}
                    <button type="submit">
                        {isLastStep ? "Submit" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
