interface MemberInfoFormData {
    memberEmails: string[];
    index: number;
}

interface Props extends MemberInfoFormData {
    updateFields(data: Partial<MemberInfoFormData>): void;
}

export default function MemberInfoForm({
    memberEmails,
    updateFields,
    index,
}: Props) {
    function updateEmail(newEmail: string) {
        const newMemberEmails = memberEmails.map((value, i) => {
            if (i === index) {
                return newEmail;
            }

            return value;
        });
        updateFields({ memberEmails: newMemberEmails });
    }

    return (
        <>
            <div className="field">
                <label htmlFor="member-email">Member Email</label>
                <input
                    id="member-email"
                    name="memberEmail"
                    placeholder="Member Email"
                    type="email"
                    autoFocus
                    required
                    value={memberEmails[index]}
                    onChange={e => updateEmail(e.target.value)}
                />
            </div>
        </>
    );
}
