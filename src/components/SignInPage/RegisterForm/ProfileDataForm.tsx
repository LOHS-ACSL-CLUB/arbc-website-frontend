interface ProfileData {
    schoolName: string;
    grade: string;
    city: string;
}

interface Props extends ProfileData {
    updateFields(field: Partial<ProfileData>): void;
}

function ProfileDataForm({ schoolName, grade, city, updateFields }: Props) {
    return (
        <>
            <div>
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

            <div>
                <label htmlFor="grade">Grade</label>
                <input
                    id="grade"
                    name="grade"
                    placeholder="Grade"
                    required
                    value={grade}
                    onChange={e => updateFields({ grade: e.target.value })}
                />
            </div>

            <div>
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
        </>
    );
}

export default ProfileDataForm;
