import ScoreCard from "./ScoreCard";
import KeywordSection from "./KeywordSection";
import InfoCard from "./InfoCard";
import FeedbackCard from "./FeedbackCard";

const ResultsDashboard = ({ analysis }) => {
  return (
    <div className="mt-16 space-y-8">

      {/* Heading */}

      <div className="text-center">

        <h2 className="text-4xl font-bold text-slate-800">
          Analysis Report
        </h2>

        <p className="text-slate-500 mt-3">
          AI evaluated your resume against the Job Description.
        </p>

      </div>

      {/* ATS Score */}

      <div className="bg-white rounded-3xl shadow-xl p-10">

        <ScoreCard score={analysis.atsScore} />

      </div>

      {/* Keywords */}

      <div className="grid xl:grid-cols-2 gap-8">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <KeywordSection
            title="✅ Matched Keywords"
            keywords={analysis.matchedKeywords}
            bgColor="bg-green-100"
            textColor="text-green-700"
          />

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <KeywordSection
            title="❌ Missing Keywords"
            keywords={analysis.missingKeywords}
            bgColor="bg-red-100"
            textColor="text-red-700"
          />

        </div>

      </div>

      {/* Strengths */}

      <div className="grid xl:grid-cols-2 gap-8">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <InfoCard
            title="Strengths"
            icon="🚀"
            color="text-green-600"
            items={analysis.strengths}
          />

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <InfoCard
            title="Needs Improvement"
            icon="📌"
            color="text-orange-600"
            items={analysis.improvements}
          />

        </div>

      </div>

      {/* Feedback */}

      <div className="bg-white rounded-3xl shadow-xl p-8">

        <FeedbackCard
          feedback={analysis.overallFeedback}
        />

      </div>

    </div>
  );
};

export default ResultsDashboard;