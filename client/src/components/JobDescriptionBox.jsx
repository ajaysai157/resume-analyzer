import { FiFileText, FiTrash2 } from "react-icons/fi";

const JobDescriptionBox = ({ value, onChange }) => {
  return (
    <div className="glass-card rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            Job Description
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Paste target role requirements & qualifications
          </p>
        </div>
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-semibold transition"
          >
            <FiTrash2 size={13} /> Clear Text
          </button>
        )}
      </div>

      <div className="relative flex-1 flex flex-col">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste full Job Description here (responsibilities, required skills, tools, experience)..."
          className="w-full flex-1 min-h-[300px] bg-slate-950/60 border border-slate-800 focus:border-indigo-500 rounded-2xl p-5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-200 focus:ring-4 focus:ring-indigo-500/10 resize-none font-sans leading-relaxed"
        />

        <div className="flex justify-between items-center mt-4 text-xs font-semibold">
          <span className="text-slate-400">
            {value.length} Characters
          </span>
          <span className={value.trim().length >= 50 ? "text-emerald-400" : "text-amber-400"}>
            {value.trim().length >= 50 ? "✓ Minimum length met" : "Minimum 50 characters required"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionBox;