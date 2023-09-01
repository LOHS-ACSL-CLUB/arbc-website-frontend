import CompetitionSection from "./CompetitionSection";
import ImportantInfoSection from "./ImportantInfoSection";
import IntroductionSection from "./IntroductionSection";
import Separator from "./Seperator";
import SponsorsSection from "./SponsorsSection";

function MainPage() {
    return (
        <div className="main-page">
            <IntroductionSection />
            <CompetitionSection />
            <Separator />
            <ImportantInfoSection />
            <SponsorsSection />
        </div>
    );
}

export default MainPage;
