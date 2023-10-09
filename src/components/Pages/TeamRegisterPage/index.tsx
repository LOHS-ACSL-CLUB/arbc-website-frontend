import axios from "axios";
import FormPageTemplate from "components/Utils/FormPageTemplate";
import StepDisplay from "components/Utils/StepDisplay";
import useMultistepForm from "hooks/useMultistepForm";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import TeamInfoForm from "./Forms/TeamInfoForm";

type Member = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    schoolName: string;
    grade: number;
    city: string;
    phone: string;
};

type TeamRegisterFormData = {
    teamName: string;
    pointOfContactEmail: string;
    pointOfContactPhone: string;
    members: Member[];
};

const INITIAL_DATA: TeamRegisterFormData = {
    teamName: "",
    pointOfContactEmail: "",
    pointOfContactPhone: "",
    members: [],
};

const DEFAULT_STEP_DISPLAY = ["Team Info"];

function TeamRegisterPage() {
    const [data, setData] = useState(INITIAL_DATA);
    const navigate = useNavigate();
    const [enableSubmit, setEnableSubmit] = useState(true);
    const [nextButtonText, setNextButtonText] = useState("Next");
    const [stepDisplay, setStepDisplay] = useState(DEFAULT_STEP_DISPLAY);
    const [canSubmit, setCanSubmit] = useState(true);
    const [memberCount, setMemberCount] = useState(0);

    useEffect(() => {
        let filledArray: string[];

        if (memberCount < 1 || memberCount > 4) {
            filledArray = [];
        } else {
            filledArray = Array(memberCount).fill("Member Info") as string[];
        }

        setStepDisplay([...DEFAULT_STEP_DISPLAY, ...filledArray]);
    }, [memberCount]);

    function updateFields(fields: Partial<TeamRegisterFormData>) {
        setData(data => {
            return { ...data, ...fields };
        });
    }

    const { currentStepIndex, isFirstStep, next, back, isLastStep, step } =
        useMultistepForm([
            <TeamInfoForm
                {...data}
                setCanSubmit={setCanSubmit}
                updateFields={updateFields}
                memberCount={memberCount}
                setMemberCount={setMemberCount}
            />,
        ]);

    useEffect(() => {
        if (isLastStep) {
            setNextButtonText("Submit");
        } else {
            setNextButtonText("Next");
        }
    }, [isLastStep]);

    async function onSubmit(event: FormEvent) {
        event.preventDefault();

        if (!canSubmit) {
            return;
        }

        if (!isLastStep) {
            next();
            return;
        }

        setEnableSubmit(false);
        setNextButtonText("Submitting...");

        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, JSON.stringify(value));
        }

        try {
            await axios({
                method: "post",
                // url: "http://localhost:9000/new",
                url: "https://arbc-backend-pzrv.onrender.com/team",
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

            setEnableSubmit(true);
            setNextButtonText("Submit");
        }
    }

    return (
        <FormPageTemplate className="team-register-page">
            <h2>Team Register</h2>
            <StepDisplay
                currentStep={currentStepIndex + 1}
                steps={stepDisplay}
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
                    <button
                        type="submit"
                        className="next"
                        disabled={!enableSubmit}
                    >
                        {nextButtonText}
                    </button>
                </div>
            </form>
        </FormPageTemplate>
    );
}

export default TeamRegisterPage;
