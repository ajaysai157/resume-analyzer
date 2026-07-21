import { FiMessageSquare, FiThumbsUp, FiAlertCircle, FiCheckCircle } from "react-icons/fi";

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
          <FiMessageSquare size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            AI Executive Summary & Feedback
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Detailed evaluation synthesized by Google Gemini
          </p>
        </div>
      </div>

      <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80">
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans">
          {feedback}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 pt-2">
        <div className="glass-card rounded-2xl p-5 border border-emerald-500/20 bg-emerald-500/5">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
            <FiThumbsUp /> What's Working Well
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Matched skills and keywords align strongly with job specs, elevating your initial ATS filter score.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-amber-500/20 bg-amber-500/5">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
            <FiAlertCircle /> Areas to Optimize
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Incorporate missing keywords organically and quantify bullet points with specific measurable metrics.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-indigo-500/20 bg-indigo-500/5">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-2">
            <FiCheckCircle /> Recommended Next Steps
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Revise your resume draft with suggested keywords and run a re-analysis to verify target match score.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;