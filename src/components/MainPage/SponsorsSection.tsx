import "./SponsorsSection.scss";
import aopsLogo from "assets/sponsors-logos/aops-logo.svg";
import biolympiadsLogo from "assets/sponsors-logos/biolympiads-logo.png";
import wolframLogo from "assets/sponsors-logos/wolfram-logo.png";
import baologyPrepLogo from "assets/sponsors-logos/baology-prep-logo.png";

function SponsorsSection() {
    return (
        <div className="sponsors-section">
            <div className="container">
                <h2>
                    Our <span className="blue">Sponsors</span>
                </h2>
                <p>
                    The American Regional Biology Bowl is proudly partnered with{" "}
                    <b>
                        Art of Problem Solving, Biolympiads, Baology Prep and
                        Wolfram!
                    </b>
                </p>
                <div className="sponsors-logos">
                    <img src={aopsLogo} alt="aops logo" />
                    <img src={biolympiadsLogo} alt="biolympiads logo" />
                    <img src={baologyPrepLogo} alt="baology prep logo" />
                    <img src={wolframLogo} alt="wolfram logo" />
                </div>
            </div>
        </div>
    );
}

export default SponsorsSection;
