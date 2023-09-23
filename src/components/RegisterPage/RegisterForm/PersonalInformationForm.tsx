import ValidationInput from "components/ValidationInput";
import { useEffect, useState } from "react";

export type ShowValidations = { email: boolean; password: boolean };

interface PersonalInformationData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    setCanSubmit(canSubmit: boolean): void;
    showValidations: ShowValidations;
    setShowValidations: React.Dispatch<React.SetStateAction<ShowValidations>>;
}

interface Props extends PersonalInformationData {
    updateFields(data: Partial<PersonalInformationData>): void;
}

function PersonalInformationForm({
    firstName,
    lastName,
    email,
    password,
    updateFields,
    setCanSubmit,
    showValidations,
    setShowValidations,
}: Props) {
    const [confirmEmail, setConfirmEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const emailMatch = confirmEmail === email;
    const passwordMatch = confirmPassword === password;

    useEffect(() => {
        if (!emailMatch || !passwordMatch) {
            setCanSubmit(false);
        } else {
            setCanSubmit(true);
        }
    }, [emailMatch, passwordMatch, setCanSubmit]);

    function onConfirmEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setConfirmEmail(e.target.value);
        setShowValidations(s => {
            return { ...s, email: true };
        });
    }

    function onConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(e.target.value);
        setShowValidations(s => {
            return { ...s, password: true };
        });
    }

    return (
        <>
            <div className="field">
                <label htmlFor="first-name">First Name</label>
                <input
                    id="first-name"
                    name="firstName"
                    placeholder="First Name"
                    autoFocus
                    required
                    value={firstName}
                    onChange={e => updateFields({ firstName: e.target.value })}
                />
            </div>
            <div className="field">
                <label htmlFor="last-name">Last Name</label>
                <input
                    id="last-name"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={lastName}
                    onChange={e => updateFields({ lastName: e.target.value })}
                />
            </div>

            <div className="field">
                <label htmlFor="email">Email </label>
                <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                    value={email}
                    onChange={e => updateFields({ email: e.target.value })}
                />
            </div>
            <ValidationInput
                id="confirm-email"
                placeholder="Confirm Email"
                type="email"
                required
                value={confirmEmail}
                onChange={onConfirmEmailChange}
                isValidate={emailMatch}
                showValidation={showValidations.email}
                labelText="Confirm Email"
                validationText="*Email does not match!*"
            />

            <div className="field">
                <label htmlFor="password">Password </label>
                <input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                    value={password}
                    onChange={e => updateFields({ password: e.target.value })}
                />
            </div>
            <ValidationInput
                id="confirm-password"
                placeholder="Confirm Password"
                type="password"
                required
                value={confirmPassword}
                onChange={onConfirmPasswordChange}
                isValidate={passwordMatch}
                showValidation={showValidations.password}
                labelText="Confirm Password"
                validationText="*Password does not match!*"
            />
        </>
    );
}

export default PersonalInformationForm;
