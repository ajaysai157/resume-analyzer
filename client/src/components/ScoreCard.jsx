import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FiCheckCircle, FiAlertCircle, FiAward } from "react-icons/fi";

const ScoreCard = ({ score }) => {
  let message = "Needs Improvement";
  let color = "#ef4444";
  let badgeStyle = "bg-rose-500/10 text-rose-400 border-rose-500/30";
  let grade = "C";

  if (score >= 90) {
    message = "Outstanding ATS Match";
    color = "#10b981";
    badgeStyle = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
    grade = "A+";
  } else if (score >= 80) {
    message = "Excellent Match";
    color = "#10b981";
    badgeStyle = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
    grade = "A";
  } else if (score >= 70) {
    message = "Good Match";
    color = "#6366f1";
    badgeStyle = "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
    grade = "B+";
  } else if (score >= 60) {
    message = "Average Match";
    color = "#f59e0b";
    badgeStyle = "bg-amber-500/10 text-amber-400 border-amber-500/30";
    grade = "B";
  }

  return (
    <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Circular Progress Gauge */}
        <div className="flex justify-center items-center relative py-4">
          <div className="w-56 h-56 relative">
            <CircularProgressbar
              value={score}
              text={`${score}%`}
              styles={buildStyles({
                pathColor: color,
                textColor: "#ffffff",
                trailColor: "rgba(30, 41, 59, 0.8)",
                strokeLinecap: "round",
                textSize: "22px",
              })}
            />
          </div>
        </div>

        {/* Breakdown Text */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className={`px-4 py-1.5 rounded-full border text-xs font-black tracking-wider uppercase ${badgeStyle}`}>
              {message}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300">
              Grade: {grade}
            </span>
          </div>

          <h2 className="text-3xl font-black text-white tracking-tight">
            ATS Compatibility Score
          </h2>

          <p className="text-slate-400 text-sm leading-relaxed">
            This AI-calculated score reflects how well your resume align with key skills, tools, requirements, and keywords in the job posting.
          </p>

          <div className="pt-4 border-t border-slate-800/80">
            <div className="flex justify-between items-center text-xs font-bold mb-2">
              <span className="text-slate-400">Match Percentage</span>
              <span className="text-white">{score}% / 100%</span>
            </div>
            <div className="h-3 rounded-full bg-slate-900 overflow-hidden border border-slate-800 p-0.5">
              <div
                className="h-full rounded-full transition-all duration-1000 shadow-glow"
                style={{
                  width: `${score}%`,
                  background: color,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;