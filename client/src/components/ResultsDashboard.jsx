import ScoreCard from "./ScoreCard";
import KeywordSection from "./KeywordSection";
import InfoCard from "./InfoCard";
import FeedbackCard from "./FeedbackCard";

const ResultsDashboard = ({
    analysis,
}) => {

    return (

        <div className="space-y-8 mt-12">

            <ScoreCard
                score={analysis.atsScore}
            />

            <div className="grid lg:grid-cols-2 gap-6">

                <KeywordSection
                    title="Matched Keywords"
                    keywords={analysis.matchedKeywords}
                    bgColor="bg-green-100"
                    textColor="text-green-700"
                />

                <KeywordSection
                    title="Missing Keywords"
                    keywords={analysis.missingKeywords}
                    bgColor="bg-red-100"
                    textColor="text-red-700"
                />

            </div>

            <div className="grid lg:grid-cols-2 gap-6">

                <InfoCard
                    title="Strengths"
                    icon="⭐"
                    color="text-blue-600"
                    items={analysis.strengths}
                />

                <InfoCard
                    title="Improvements"
                    icon="⚠️"
                    color="text-amber-600"
                    items={analysis.improvements}
                />

            </div>

            <FeedbackCard
                feedback={analysis.overallFeedback}
            />

        </div>

    );

};

export default ResultsDashboard;