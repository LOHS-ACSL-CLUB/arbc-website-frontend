import "./StepDisplay.scss";

interface StepDisplayProps {
    currentStep: number;
    steps: string[];
}

function StepDisplay({ currentStep, steps }: StepDisplayProps) {
    function renderSteps() {
        return steps.map((s, i) => {
            const index = i + 1;

            return (
                <div
                    className={`step ${index === currentStep ? "active" : ""}`}
                    key={`${s}-${i}`}
                >
                    <div className="step-number">{index}</div>
                    <div className="step-description">{s}</div>
                </div>
            );
        });
    }

    return (
        <div className="step-display">
            <div className="line" />
            <div className="steps">{renderSteps()}</div>
        </div>
    );
}

export default StepDisplay;
