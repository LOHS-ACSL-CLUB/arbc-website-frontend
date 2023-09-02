import "./SponsorsSection.scss";
import aopsLogo from "assets/aops-logo.svg";
import biolympiadsLogo from "assets/biolympiads-logo.png";
import wolframLogo from "assets/wolfram-logo.png";
import baologyPrepLogo from "assets/baology-prep-logo.png";

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
                        Art of Problem Solving, Biolympiads, Baology Prem and
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
