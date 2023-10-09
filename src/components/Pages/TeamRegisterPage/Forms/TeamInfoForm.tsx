import ValidationInput from "components/Utils/ValidationInput";
import { useEffect, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input/input";

interface TeamInfoData {
    teamName: string;
    pointOfContactEmail: string;
    pointOfContactPhone: string;
}

interface Props extends TeamInfoData {
    updateFields(data: Partial<TeamInfoData>): void;
    setCanSubmit(canSubmit: boolean): void;
    memberCount: number;
    setMemberCount(member: number): void;
}

function TeamInfoForm({
    teamName,
    pointOfContactEmail,
    pointOfContactPhone,
    updateFields,
    setCanSubmit,
    memberCount,
    setMemberCount,
}: Props) {
    const [showPhoneValidation, setShowPhoneValidation] = useState(false);
    const isPhoneValidate =
        pointOfContactEmail !== "" && isValidPhoneNumber(pointOfContactPhone);

    useEffect(() => {
        setCanSubmit(isPhoneValidate);
    }, [isPhoneValidate, setCanSubmit]);

    return (
        <>
            <div className="field">
                <label htmlFor="team-name">
                    Team Name (Please keep it appropriate)
                </label>
                <input
                    id="team-name"
                    name="teamName"
                    placeholder="Team Name"
                    autoFocus
                    required
                    value={teamName}
                    onChange={e => updateFields({ teamName: e.target.value })}
                />
            </div>

            <div className="field">
                <label htmlFor="point-of-contact-email">
                    Email (Point of contact for all team members)
                </label>
                <input
                    id="point-of-contact-email"
                    name="pointOfContactEmail"
                    placeholder="Email"
                    type="email"
                    required
                    value={pointOfContactEmail}
                    onChange={e =>
                        updateFields({ pointOfContactEmail: e.target.value })
                    }
                />
            </div>

            <ValidationInput
                labelText="Phone Number (Point of contact for all team members"
                validationText="*Phone Number Is Not Valid!*"
                customInput={
                    <PhoneInput
                        id="point-of-contact-phone"
                        name="pointOfContactPhone"
                        placeholder="Phone Number"
                        required
                        value={pointOfContactPhone}
                        onChange={e => {
                            updateFields({ pointOfContactPhone: e || "" });
                            setShowPhoneValidation(true);
                        }}
                        country="US"
                        smartCaret
                    />
                }
                isValidate={isValidPhoneNumber(pointOfContactPhone || "")}
                showValidation={showPhoneValidation}
            />

            <div className="field">
                <label htmlFor="member-count">Amount of members (1-4)</label>
                <input
                    id="member-count"
                    name="memberCount"
                    placeholder="Amount of members"
                    type="number"
                    min={1}
                    max={4}
                    required
                    value={memberCount || ""}
                    onChange={e => setMemberCount(e.target.valueAsNumber || 0)}
                />
            </div>
        </>
    );
}

export default TeamInfoForm;
