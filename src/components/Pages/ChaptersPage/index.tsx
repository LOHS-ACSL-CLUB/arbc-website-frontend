import ChaptersDescriptionSection from "./ChaptersDescriptionSection";
import IntroductionSection from "./IntroductionSection";
import StartChapterSection from "./StartChapterSection";

function ChaptersPage() {
    return (
        <div className="chapters-page">
            <IntroductionSection />
            <StartChapterSection />
            <ChaptersDescriptionSection />
        </div>
    );
}

export default ChaptersPage;
