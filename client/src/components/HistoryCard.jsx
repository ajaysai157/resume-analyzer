import { FiEye, FiTrash2, FiFileText, FiCalendar, FiCheckCircle } from "react-icons/fi";

const HistoryCard = ({ analysis, onView, onDelete }) => {
  const score = analysis.atsScore;

  const badgeClass =
    score >= 80
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
      : score >= 60
      ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
      : "bg-rose-500/10 text-rose-400 border-rose-500/30";

  const status =
    score >= 80
      ? "Excellent Match"
      : score >= 60
      ? "Good Match"
      : "Needs Work";

  const progressColor =
    score >= 80 ? "bg-emerald-500" : score >= 60 ? "bg-amber-500" : "bg-rose-500";

  return (
    <div className="glass-card rounded-3xl p-6 border border-slate-800 hover:border-indigo-500/40 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Card Header */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
              <FiFileText size={20} />
            </div>
            <div>
              <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-extrabold uppercase ${badgeClass}`}>
                {status}
              </span>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1">
                <FiCalendar size={12} />
                <span>
                  {new Date(analysis.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <span className="text-2xl font-black text-white">{score}%</span>
          </div>
        </div>

        {/* Description snippet */}
        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
          {analysis.jobDescription || "No job description provided"}
        </p>

        {/* Progress Bar */}
        <div className="space-y-1.5 mb-6">
          <div className="flex justify-between text-[11px] font-bold">
            <span className="text-slate-400">ATS Match Score</span>
            <span className="text-slate-200">{score}%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
            <div
              className={`h-full rounded-full transition-all duration-500 ${progressColor}`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800/80">
        <button
          onClick={() => onView(analysis._id)}
          className="flex justify-center items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white py-2.5 rounded-xl text-xs font-bold transition shadow cursor-pointer"
        >
          <FiEye size={14} />
          <span>View Report</span>
        </button>

        <button
          onClick={() => onDelete(analysis._id)}
          className="flex justify-center items-center gap-1.5 bg-slate-800 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 border border-slate-700 hover:border-rose-500/40 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer"
        >
          <FiTrash2 size={14} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default HistoryCard;