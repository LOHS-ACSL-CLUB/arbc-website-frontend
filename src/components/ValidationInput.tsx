interface ValidationInputProps extends React.ComponentPropsWithoutRef<"input"> {
    showValidation?: boolean;
    isValidate?: boolean;
    validationText: string;
    labelText: string;
    customInput?: React.ReactNode;
}

function ValidationInput({
    isValidate = true,
    showValidation = false,
    validationText,
    labelText,
    customInput,
    ...props
}: ValidationInputProps) {
    return (
        <div className="field">
            <label htmlFor={props.id}>
                {labelText}{" "}
                {!isValidate && showValidation && (
                    <span className="validation-text">{validationText}</span>
                )}
            </label>
            {customInput ?? <input {...props} />}
        </div>
    );
}

export default ValidationInput;
