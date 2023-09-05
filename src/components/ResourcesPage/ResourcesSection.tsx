import { Link } from "react-router-dom";
import "./ResourcesSection.scss";

function ResourcesSection() {
    return (
        <div className="resources-section">
            <Link
                to="https://drive.google.com/drive/folders/1I0FQZueb78zwTBvpZ7mAutgzmQI32bZ3?usp=sharing"
                target="_blank"
            >
                https://drive.google.com/drive/folders/1I0FQZueb78zwTBvpZ7mAutgzmQI32bZ3?usp=sharing
            </Link>
        </div>
    );
}

export default ResourcesSection;
