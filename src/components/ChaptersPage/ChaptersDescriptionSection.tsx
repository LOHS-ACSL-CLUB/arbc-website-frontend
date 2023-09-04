import { Link } from "react-router-dom";
import "./ChaptersDescriptionSection.scss";

function ChaptersDescriptionSection() {
    return (
        <div className="chapters-description-section">
            <div className="content">
                <div>
                    <h2>What Are Chapters?</h2>
                    <p>
                        We want <i>you</i> to create a Biology Bowl chapter at
                        your school! Your chapter could be a new club at your
                        school or a subdivision of an existing club (e.g.
                        Biology Olympiad club). Becoming a chapter gives the
                        club numerous benefits from the IBB. Moreover, it
                        spreads interest in biology and emphasizes collaboration
                        amongst chapter members!
                    </p>
                    <p>
                        If you require assistance in making a biology club or
                        IBB chapter at your school, please reach out to us
                        at&nbsp;
                        <Link to="mailto: internationalbiologybowl@gmail.com">
                            internationalbiologybowl@gmail.com.
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
                        Access to unused and unreleased USABB and IBB Bowl Round
                        questions along with answers.
                        <br />
                        Access to online presentations about various topics from
                        biology clubs across the nation in the material tested.
                        <br />
                        Access to online handouts about various topics in the
                        material tested.
                        <br />
                        The chapter will be featured on the IBB website.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChaptersDescriptionSection;
