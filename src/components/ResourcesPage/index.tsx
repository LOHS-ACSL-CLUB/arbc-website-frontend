import IntroductionSection from "./IntroductionSection";
import ResourcesSection from "./ResourcesSection";

function ResourcesPage() {
    return (
        <div className="resources-page" style={{ flexGrow: 1 }}>
            <IntroductionSection />
            <ResourcesSection />
        </div>
    );
}

export default ResourcesPage;
