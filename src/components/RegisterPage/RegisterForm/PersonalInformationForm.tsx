interface PersonalInformationData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
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
}: Props) {
    return (
        <>
            <div>
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
            <div>
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

            <div>
                <label htmlFor="email">Email</label>
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
            <div>
                <label htmlFor="confirm-email">Confirm Email</label>
                <input
                    id="confirm-email"
                    placeholder="Confirm Email"
                    type="email"
                    required
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
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
            <div>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    id="confirm-password"
                    placeholder="Confirm Password"
                    type="password"
                    required
                />
            </div>
        </>
    );
}

export default PersonalInformationForm;
