import { ReactElement, useState } from "react";

function useMultistepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const isFirstStep = currentStepIndex <= 0;
    const isLastStep = currentStepIndex >= steps.length - 1;

    const next = () => {
        if (isLastStep) {
            return;
        }

        setCurrentStepIndex(i => i + 1);
    };

    const back = () => {
        if (isFirstStep) {
            return;
        }

        setCurrentStepIndex(i => i - 1);
    };

    return {
        steps,
        currentStepIndex,
        setCurrentStepIndex,
        next,
        back,
        isFirstStep,
        isLastStep,
        step: steps[currentStepIndex],
    };
}

export default useMultistepForm;
