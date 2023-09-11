import IntroductionSection from "./IntroductionSection";
import ResourcesSection from "./ResourcesSection";
import "./index.scss";

function ResourcesPage() {
    return (
        <div className="resources-page">
            <IntroductionSection />
            <ResourcesSection />
        </div>
    );
}

export default ResourcesPage;
