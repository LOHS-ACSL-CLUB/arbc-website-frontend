import { Link } from "react-router-dom";
import "./ChaptersDescriptionSection.scss";

function ChaptersDescriptionSection() {
    return (
        <div className="chapters-description-section">
            <div className="content">
                <div>
                    <h2>What Are Chapters?</h2>
                    <p>
                        We want <i>you</i> to create an ARBC chapter at your
                        school! Your chapter could be a new club at your school
                        or a subdivision of an existing club (e.g. Biology
                        Olympiad club). Becoming a chapter gives the club
                        numerous benefits from the Southern California ARBC.
                        Moreover, it spreads interest in biology and emphasizes
                        collaboration amongst chapter members!
                    </p>
                    <p>
                        If you require assistance in making a biology club or
                        ARBC chapter at your school, please reach out to us
                        at&nbsp;
                        <Link to="mailto: arbcsoutherncal@gmail.com">
                            arbcsoutherncal@gmail.com.
                        </Link>
                    </p>
                </div>
                <div>
                    <h2>Chapter Expectations</h2>
                    <p>
                        Must be a new or existing biology-related club
                        <br />
                        Chapter captains should teach and train the rest of
                        their team/chapter in the biological sciences to allow
                        for the overall growth of all members
                        <br />
                        Chapter captains should promote IBB events and
                        competitions to its members and within the school as a
                        whole through means including, but not limited to,
                        social media, physical flyers, word-of-mouth, etc.
                    </p>
                </div>
                <div>
                    <h2>Chapter Benefits</h2>
                    <p>
                        Access to sample ARBC Round questions along with
                        answers.
                        <br />
                        Chapter or club leader will be given volunteer hours
                        based on the number of participants
                        <br />
                        Access to online presentations on various topics from
                        biology clubs across the nation
                        <br />
                        The chapter leader will be featured on the website.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChaptersDescriptionSection;
