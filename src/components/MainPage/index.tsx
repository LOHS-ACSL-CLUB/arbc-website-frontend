import CompetitionSection from "./CompetitionSection";
import Footer from "./Footer";
import ImportantInfoSection from "./ImportantInfoSection";
import IntroductionSection from "./IntroductionSection";
import Separator from "./Seperator";
import SignUpSection from "./SignUpSection";
import SponsorsSection from "./SponsorsSection";

function MainPage() {
    return (
        <div className="main-page">
            <IntroductionSection />
            <CompetitionSection />
            <Separator />
            <ImportantInfoSection />
            <SponsorsSection />
            <SignUpSection />
            <Footer />
        </div>
    );
}

export default MainPage;
