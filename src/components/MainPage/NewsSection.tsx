import { DateTime } from "luxon";
import News, { NewsType } from "./News";
import "./NewsSection.scss";

const NEWS: NewsType[] = [
    {
        title: "Welcome to the 2022-2023 Season",
        date: DateTime.fromISO("2023-08-13"),
        content: (
            <>
                <p>
                    The rules manuals were below and they are available for free
                    at
                    <br />
                    <a
                        href="https://biologycompetition.org/assets/files/ARBC%20Official%20Rulebook.pdf"
                        target="_blank"
                    >
                        https://biologycompetition.org/assets/files/ARBC%20Official%20Rulebook.pdf
                    </a>
                    <br />
                    American Regional Biology Competition requests that all
                    president and chapter leaders download their own copies and
                    explain them to the participants The 2023 SoCal
                </p>
                <p>Events and schedule will be available soon.</p>
            </>
        ),
    },
];

function NewsSection() {
    return (
        <div className="news-section">
            <div className="content">
                <div className="news-and-updates">
                    <div className="sidebar">
                        <h2>News & Updates</h2>
                        <p className="date">
                            {DateTime.now().toLocaleString(DateTime.DATE_MED)}
                        </p>
                    </div>
                    <div className="content">
                        <div className="news">
                            <News news={NEWS} />
                        </div>
                    </div>
                </div>
                <div className="stats">
                    <div className="stat">
                        <div className="number">200+</div>
                        <div className="name">Students</div>
                    </div>
                    <div className="stat">
                        <div className="number">60+</div>
                        <div className="name">Teams</div>
                    </div>
                    <div className="stat">
                        <div className="number">50+</div>
                        <div className="name">Schools</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsSection;
