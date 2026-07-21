import { useNavigate } from "react-router-dom";
import { FiFileText, FiCalendar, FiArrowRight, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";

const RecentAnalysisCard = ({ analysis }) => {
  const navigate = useNavigate();
  const score = analysis.atsScore;

  const scoreBadgeColor =
    score >= 80
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
      : score >= 60
      ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
      : "bg-rose-500/10 text-rose-400 border-rose-500/30";

  return (
    <div className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/40 transition-colors">
          <FiFileText size={22} />
        </div>
        <div>
          <h3 className="font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
            {analysis.jobDescription ? analysis.jobDescription.substring(0, 45) + "..." : "Resume Analysis Report"}
          </h3>
          <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
            <span className="flex items-center gap-1">
              <FiCalendar size={13} />
              {new Date(analysis.createdAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              {score >= 70 ? (
                <FiCheckCircle className="text-emerald-400" />
              ) : (
                <FiAlertTriangle className="text-amber-400" />
              )}
              {analysis.matchedKeywords?.length || 0} skills matched
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 border-slate-800/80 pt-3 sm:pt-0">
        <span className={`px-3.5 py-1.5 rounded-xl border text-sm font-extrabold ${scoreBadgeColor}`}>
          {score}% Match
        </span>

        <button
          onClick={() => navigate(`/history/${analysis._id}`)}
          className="flex items-center gap-1.5 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
        >
          <span>View Report</span>
          <FiArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default RecentAnalysisCard;