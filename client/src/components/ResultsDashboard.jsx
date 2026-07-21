import ScoreCard from "./ScoreCard";
import KeywordSection from "./KeywordSection";
import InfoCard from "./InfoCard";
import FeedbackCard from "./FeedbackCard";
import { FiPrinter, FiZap } from "react-icons/fi";

const ResultsDashboard = ({ analysis }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Report Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card p-6 rounded-3xl border border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 mb-1">
            <FiZap /> AI Analysis Report Ready
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Detailed Evaluation Breakdown
          </h2>
        </div>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow cursor-pointer self-start sm:self-auto"
        >
          <FiPrinter /> Export / Print Report
        </button>
      </div>

      {/* ATS Gauge Score Card */}
      <ScoreCard score={analysis.atsScore} />

      {/* Keyword Breakdown Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        <KeywordSection
          title="Matched Keywords"
          keywords={analysis.matchedKeywords || []}
          isMatched={true}
        />
        <KeywordSection
          title="Missing Keywords"
          keywords={analysis.missingKeywords || []}
          isMatched={false}
        />
      </div>

      {/* Strengths & Improvements Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        <InfoCard
          title="Key Strengths"
          icon="🚀"
          items={analysis.strengths || []}
          isPositive={true}
        />
        <InfoCard
          title="Suggested Improvements"
          icon="💡"
          items={analysis.improvements || []}
          isPositive={false}
        />
      </div>

      {/* Overall AI Feedback */}
      <FeedbackCard feedback={analysis.overallFeedback} />
    </div>
  );
};

export default ResultsDashboard;