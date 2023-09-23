interface ProfileData {
    schoolName: string;
    grade: number;
    city: string;
    phone: string;
}

interface Props extends ProfileData {
    updateFields(field: Partial<ProfileData>): void;
}

function ProfileDataForm({
    schoolName,
    grade,
    city,
    updateFields,
    phone,
}: Props) {
    return (
        <>
            <div className="field">
                <label htmlFor="school-name">School Name</label>
                <input
                    id="school-name"
                    name="schoolName"
                    placeholder="School Name"
                    required
                    autoFocus
                    value={schoolName}
                    onChange={e => updateFields({ schoolName: e.target.value })}
                />
            </div>

            <div className="field">
                <label htmlFor="grade">Grade (8-12)</label>
                <input
                    id="grade"
                    name="grade"
                    placeholder="Grade (8-12)"
                    required
                    value={grade}
                    type="number"
                    onChange={e =>
                        updateFields({ grade: e.target.valueAsNumber })
                    }
                    min={8}
                    max={12}
                />
            </div>

            <div className="field">
                <label htmlFor="city">City</label>
                <input
                    id="city"
                    name="city"
                    placeholder="City"
                    required
                    value={city}
                    onChange={e => updateFields({ city: e.target.value })}
                />
            </div>

            <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    type="tel"
                    required
                    value={phone}
                    onChange={e => updateFields({ phone: e.target.value })}
                />
            </div>
        </>
    );
}

export default ProfileDataForm;
