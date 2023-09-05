import { Link } from "react-router-dom";
import "./RoundsSection.scss";

function RoundsSection() {
    return (
        <div className="rounds-section">
            <div className="content">
                <div className="texts">
                    <h2>Introduction</h2>
                    <p>
                        The American Regional Biology Competition is open to all
                        high school students and some exceptional middle school
                        students (Reach out to our email to see if you're
                        applicable) in America. Our regional competition is
                        oriented around giving students the best introduction to
                        competitive biology and bridging the gap between
                        beginner biology (AP Biology and IB Biology) and
                        Advanced Biology (USABO). The competition has four
                        rounds: Individual, team, paper, and wave rounds. The
                        rounds' descriptions are listed below. Out of all teams,
                        a select number of teams that performed the best will
                        proceed to the national round and compete with
                        representatives from other states. Only the first four
                        rounds are held in person while the national round is
                        held online.
                    </p>
                </div>
                <Link to="https://placeholder.com" target="_blank">
                    Rules and Logistics
                </Link>
                <div className="texts">
                    <h2>Competition Rounds</h2>
                    <p>
                        Rounds in American Regional Biology Competition is
                        designed to test students and their knowledge of
                        biology. To ensure a fun and equitable experience for
                        all, cheating is not allowed and any interpretation of
                        the rules that would accommodate cheating is considered
                        an academic honesty violation. Students/Teams who are
                        found to be in violation of ARBC’s rules and/or
                        disruptive to the spirit or the orderly function of the
                        competition will have their scores disqualified and be
                        asked to leave the venue. Teams will consist of 4 or
                        fewer students from a single school/registering entity.
                        All students must be in grades 8-12, exceptions will be
                        made on a case-by-case basis(Reach out to our email).
                        Teams is finalized January 1st, no team members may be
                        substituted or changed after the date.
                    </p>
                </div>
                <div className="rounds">
                    <div className="round">
                        <h2>Individual Round (20%)</h2>
                        <p>
                            <b>Time:</b> 60 minutes
                        </p>
                        <p>
                            <b>Task:</b> You will be given 50 multiple-choice
                            questions to answer individually.
                        </p>
                        <p>
                            <b>Description:</b> Each competitor will complete as
                            many questions as possible without the help of their
                            books or teammates! Scientific calculators are
                            allowed and highly recommended to help with certain
                            questions.
                        </p>
                    </div>
                    <div className="round">
                        <h2>Team Round (25%)</h2>
                        <p>
                            <b>Time:</b> 30 minutes
                        </p>
                        <p>
                            <b>Task:</b> Answer 6 short-answer questions as a
                            team
                        </p>
                        <p>
                            <b>Description:</b> Each team will be given a set of
                            10 passages, and will have to answer 2-5 questions
                            for each passage. These questions will test the
                            competitors' depth of understanding and problem
                            solving capabilities. Teamwork and collaboration is
                            strongly recommended.
                        </p>
                    </div>
                    <div className="round">
                        <h2>Paper Round (30%)</h2>
                        <p>
                            <b>Time:</b> 40 minutes
                        </p>
                        <p>
                            <b>Task:</b> Read scientific papers or excerpts and
                            answer questions (Internet Usage is allowed)
                        </p>
                        <p>
                            <b>Description:</b> You and your team will read 2
                            scientific research papers or articles and be asked
                            1-3 comprehension questions on each. There will also
                            be 1-3 synthesis questions.
                        </p>
                    </div>
                    <div className="round">
                        <h2>Wave Round (25%)</h2>
                        <p>
                            <b>Time:</b> 30 minutes
                        </p>
                        <p>
                            <b>Task:</b> Answer 15 multiple true-false questions
                            given to your team in order of increasing difficulty{" "}
                        </p>
                        <p>
                            <b>Description:</b> You will be given 50
                            multiple-choice questions to answer individually.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoundsSection;
