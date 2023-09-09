import { Link } from "react-router-dom";
import "./MainSection.scss";

function MainSection() {
    return (
        <div className="main-section">
            <div className="content">
                <section>
                    <h2>Overview</h2>
                    <p>
                        We are a 501c3 volunteer run, nonprofit organization
                        that operates year-round to make biology accessible to
                        students and bridge the gap between beginner biology and
                        competitive biology. We are in our third year as a
                        organization and have experienced immense growth since
                        our inaugural year. We are currently projected to hold
                        competitions in <b>16 regions across the nation.</b>
                    </p>
                    <p>
                        The funds given will go directly to us in an effort to
                        further increase participation and making biology
                        accessible. We will be raising money up till the date of
                        the competition and would be grateful for anything you
                        are able to give. We appreciate you all in advance.
                    </p>
                </section>
                <section>
                    <h2>Funding Objectives</h2>
                    <p>
                        In order to keep the competition as accessible as
                        possible while still providing a quality experience, we
                        request your support via donations. Our volunteer staff
                        takes care of event planning, competition writing, and
                        organization administration, but there are still some
                        aspects of the competition that cannot be covered
                        entirely by our student volunteers. Furthermore, we
                        would like to offer grants to low or mixed-income/Title
                        1 schools to be able to purchase materials as well as
                        afford transportation and competition fees.
                    </p>
                    <p>
                        <b>
                            All donations are tax-exempt under ARBC's federal
                            501(c)(3) status as approved by the IRS. A copy of
                            the determination letter is available upon request.
                        </b>
                    </p>
                    <p>
                        Sponsorships and donations help us budget for many
                        expenses throughout the year, including:
                    </p>
                    <ul>
                        <li>Purchase textbooks and study materials </li>
                        <li>Venue Cost</li>
                        <li>
                            Helping to keep the competition accessible and
                            providing opportunities to low-income schools
                        </li>
                        <li>Paying for travel</li>
                    </ul>
                </section>
                <section className="sponsors-tiers">
                    <h2>Sponsors Tiers and Benefits</h2>
                    <p>
                        <b>Platinum</b>: Sponsors with this designation are
                        those who provided large-scale donations (equivalent in
                        value to $750 or more) to the organization as a whole,
                        to an individual ARBC region, or to the ARBC National
                        competition taking place in May 2024.
                    </p>
                    <p>
                        <b>Gold</b>: Sponsors with this designation are those
                        who provided large-scale donations (equivalent in value
                        up to $500) to the organization as a whole, to an
                        individual ARBC region, or to the ARBC National
                        competition taking place in May 2024.
                    </p>
                    <p>
                        <b>Silver</b>: Sponsors with this designation are those
                        who provided small-scale donations (equivalent in value
                        to $300 or less) to the organization as a whole, an
                        individual ARBC region, or to the ARBC National
                        competition taking place in May 2024.
                    </p>

                    <h3>Sponsorship and Donation Perks</h3>
                    <ul>
                        <li>
                            Platinum donors will receive:
                            <ul>
                                <li>
                                    Logo placement on the official ARBC National
                                    Exam,
                                </li>
                                <li>
                                    A feature in official ARBC test questions,
                                </li>
                                <li>All sponsorship perks at the Gold tier.</li>
                            </ul>
                        </li>
                        <li>
                            Gold donors will receive:
                            <ul>
                                <li>
                                    Logo placement on the official exam for the
                                    region they are specifically donating to,
                                </li>
                                <li>
                                    All sponsorship perks at the Silver tier.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Silver donors will receive:
                            <ul>
                                <li>An Official Statement of Donation,</li>
                                <li>
                                    Logo placement and website link on the
                                    official ARBC Website,
                                </li>
                                <li>
                                    “thank you" post on our social media
                                    platform. We will tag your business profile
                                    along with uploading your logo,
                                </li>
                                <li>
                                    A personal Thank-You Note from organizers
                                    and participants,
                                </li>
                                <li>
                                    The option to sponsor medalling prizes or
                                    special prizes.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        A helpful visual summary/diagram of this section can be
                        found{" "}
                        <Link
                            to="https://drive.google.com/file/d/1JRGb6_StVfy2E1UxlM5hl7boirGoxqyN/view"
                            target="_blank"
                        >
                            here
                        </Link>
                        .
                    </p>
                </section>
            </div>
        </div>
    );
}

export default MainSection;
