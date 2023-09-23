import { BiLinkExternal } from "react-icons/bi";
import roundsImg from "assets/introduction/rounds.png";
import studentImg1 from "assets/introduction/students-img1.png";
import studentImg2 from "assets/introduction/students-img2.png";
import "./DetailsSection.scss";
import { Link } from "react-router-dom";

function DetailsSection() {
    return (
        <div className="details-section">
            <div className="content">
                <div className="row-singular">
                    <h2>What is ARBC?</h2>
                    <p>
                        <Link
                            to="https://www.biologycompetition.org"
                            target="_blank"
                            className="link-external"
                        >
                            American Regional Biology Competition{" "}
                            <BiLinkExternal />
                        </Link>{" "}
                        is a national nonprofit organization devoted to increase
                        student interest in biology and providing recognition
                        for outstanding achievement. Southern California ARBC -
                        a division of American Regional Biology Competition -
                        hosts, manages, or supports 2 Regionals in Southern
                        California.
                    </p>
                </div>
                <div className="row">
                    <div>
                        <h2>
                            Biology competitions are the labs of intellectual
                            exploration
                        </h2>
                        <p>
                            At the competition, students will work together in
                            teams of up to 4 to compete in four different
                            rounds. The rounds may change from year to year,
                            covering fields and topics including: Molecular,
                            Cellular, Chemical Biology, Genetics, Genomics,
                            Evolutionary Genetics, Human Anatomy, Physiology,
                            Medical Biology, Systematics, Bioinformatics,
                            Integrative Biology, Ecology, Ethology, and
                            Evolution. The rounds and their descriptions can be
                            found{" "}
                            <Link
                                to="https://biologycompetition.org/assets/files/ARBC%20Official%20Rulebook.pdf"
                                target="_blank"
                            >
                                here
                            </Link>
                            .
                        </p>
                        <p>
                            Each season begins in August, when the round rules
                            are released and registration opens. Teams then
                            spend several months preparing for their Regional
                            Tournament in April vying for the title of State
                            Champion and the opportunity to represent Southern
                            California at the National Tournament.
                        </p>
                    </div>
                    <div>
                        <img src={studentImg1} />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <img src={studentImg2} />
                    </div>
                    <div>
                        <img src={roundsImg} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsSection;
