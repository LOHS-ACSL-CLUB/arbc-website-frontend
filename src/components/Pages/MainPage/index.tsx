import DetailsSection from "./DetailsSection";
import IntroductionSection from "./IntroductionSection";
import NewsSection from "./NewsSection";
import SponsorsSection from "./SponsorsSection";

function MainPage() {
    return (
        <div className="main-page">
            <IntroductionSection />
            <NewsSection />
            <DetailsSection />
            <SponsorsSection />
        </div>
    );
}

export default MainPage;
