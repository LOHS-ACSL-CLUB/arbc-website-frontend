import { Link } from "react-router-dom";
import "./ResourcesSection.scss";

function ResourcesSection() {
    return (
        <div className="resources-section">
            <div className="content">
                The link to the files can be found&nbsp;
                <Link
                    to="https://drive.google.com/drive/folders/1I0FQZueb78zwTBvpZ7mAutgzmQI32bZ3?usp=sharing"
                    target="_blank"
                >
                    here
                </Link>
                .
            </div>
        </div>
    );
}

export default ResourcesSection;
