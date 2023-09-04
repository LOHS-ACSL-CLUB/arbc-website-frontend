import { Link } from "react-router-dom";
import "./StartChapterSection.scss";

function StartChapterSection() {
    return (
        <div className="start-chapter-section">
            <div className="content">
                <h2>Start a Chapter</h2>
                <p>
                    Start a Biology Bowl chapter at your school and gain access
                    to practice material, support, and more from our team!
                </p>
                <Link to="https://placeholder.com">Start a Chapter</Link>
            </div>
        </div>
    );
}

export default StartChapterSection;
