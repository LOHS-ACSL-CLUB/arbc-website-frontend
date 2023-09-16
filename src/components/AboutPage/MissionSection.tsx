import "./MissionSection.scss";
import member1 from "assets/about/member1.png";
import member2 from "assets/about/member2.png";
import member3 from "assets/about/member3.png";

function MissionSection() {
    return (
        <div className="mission-section">
            <div className="content">
                <h2>Our Mission</h2>
                <p>
                    The ARBC aims to inspire and challenge high school students
                    to excel in biology and to pursue careers in the biological
                    sciences. The ARBC is open to all high school students in
                    the United States. If you are a high school student who
                    loves biology, we encourage you to consider participating in
                    the ARBC. It is a challenging and rewarding experience that
                    you will never forget. The ARBC aims to giving students the
                    best introduction to competitive biology and bridging the
                    gap between beginner biology (AP Biology, IB Biology and
                    Honor Biology) and Advanced Biology (USABO).
                </p>

                <p>
                    Our competition is designed to stimulate curiosity in
                    biology and ignite a lifelong passion for this fascinating
                    field. We achieve this by crafting thought-provoking
                    questions and scenarios that encourage participants to
                    explore biology beyond the confines of traditional classroom
                    learning. Moreover, the ARBC places a strong emphasis on
                    collaboration and teamwork, nurturing skills that are
                    invaluable in the realms of research, healthcare, and
                    beyond.
                </p>

                <p>
                    To fulfill our mission, we offer a multi-tiered approach. We
                    host regional competitions to provide a personalized and
                    accessible experience for participants, where they can not
                    only compete but also connect and collaborate with
                    like-minded peers in their local communities. These regional
                    tournaments serve as stepping stones, leading to our
                    national-level competition, where students from across the
                    country come together to delve deeper into the captivating
                    world of biology.
                </p>

                <div className="who-we-are">
                    <h2>WHO WE ARE</h2>

                    <div className="members">
                        <img src={member1} />
                        <img src={member2} />
                        <img src={member3} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionSection;
