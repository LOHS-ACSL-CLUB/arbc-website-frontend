import axios from "axios";
import FormPageTemplate from "components/Utils/FormPageTemplate";
import StepDisplay from "components/Utils/StepDisplay";
import useMultistepForm from "hooks/useMultistepForm";
import { serialize } from "object-to-formdata";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MemberInfoForm from "./Forms/MemberInfoForm";
import TeamInfoForm from "./Forms/TeamInfoForm";
import "./index.scss";

type TeamRegisterFormData = {
    teamName: string;
    pointOfContactEmail: string;
    pointOfContactPhone: string;
    memberEmails: string[];
};

const INITIAL_DATA: TeamRegisterFormData = {
    teamName: "",
    pointOfContactEmail: "",
    pointOfContactPhone: "",
    memberEmails: [],
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
    const DEFAULT_FORMS = useMemo(
        () => [
            <TeamInfoForm
                {...data}
                setCanSubmit={setCanSubmit}
                updateFields={updateFields}
                memberCount={memberCount}
                setMemberCount={setMemberCount}
            />,
        ],
        [memberCount, data]
    );
    const [forms, setForms] = useState<React.ReactElement[]>(DEFAULT_FORMS);

    useEffect(() => {
        if (memberCount < 1 || memberCount > 4) {
            updateFields({ memberEmails: [] });
            return;
        }

        updateFields({ memberEmails: Array(memberCount).fill("") });
    }, [memberCount]);

    useEffect(() => {
        let newStepDisplays: string[];
        let newForms: React.ReactElement[];
        const count = data.memberEmails.length;

        if (count < 1 || count > 4) {
            newStepDisplays = [];
            newForms = [];
        } else {
            newStepDisplays = data.memberEmails.map(() => "Member Info");
            newForms = data.memberEmails.map((_, index) => {
                return (
                    <MemberInfoForm
                        memberEmails={data.memberEmails}
                        index={index}
                        updateFields={updateFields}
                    />
                );
            });
        }

        setStepDisplay([...DEFAULT_STEP_DISPLAY, ...newStepDisplays]);
        setForms([...DEFAULT_FORMS, ...newForms]);
    }, [data.memberEmails, DEFAULT_FORMS]);

    function updateFields(fields: Partial<TeamRegisterFormData>) {
        setData(data => {
            return { ...data, ...fields };
        });
    }

    const { currentStepIndex, isFirstStep, next, back, isLastStep, step } =
        useMultistepForm(forms);

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

        const formData = serialize(data);

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
                    {!isFirstStep && enableSubmit && (
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
