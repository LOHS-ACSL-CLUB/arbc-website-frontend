import IntroductionSection from "./IntroductionSection";
import RoundsSection from "./RoundsSection";
import TopicsSection from "./TopicsSection";

function CompetitionPage() {
    return (
        <div className="competition-page">
            <IntroductionSection />
            <TopicsSection />
            <RoundsSection />
        </div>
    );
}

export default CompetitionPage;
