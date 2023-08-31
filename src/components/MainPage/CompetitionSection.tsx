import { Link } from "react-router-dom";
import "./CompetitionSection.scss";

function CompetitionSection() {
    return (
        <div className="competition-section">
            <div className="texts">
                <h2>The Competition</h2>

                <p>
                    The American Regional Biology Competition (ARBC) is a
                    competition oriented towards furthering interest in the
                    biological sciences amongst high school students. The ARBC
                    provides resources and opportunities for students to take
                    their interest in biology far beyond the limits of their
                    classroom settings and pursue topics which they are
                    interested in. Students will have the opportunity to compete
                    as a team, and as such are encouraged to develop
                    interpersonal cooperation skills and to collaborate
                    effectively. The competition will contain both individual
                    and team segments, both of which will require thorough prior
                    knowledge and problem solving skills.
                </p>

                <Link to="/competition">Learn More</Link>
            </div>
            <img
                src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                alt="placeholder"
            />
        </div>
    );
}

export default CompetitionSection;
