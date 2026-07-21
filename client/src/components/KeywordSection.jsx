const KeywordSection = ({ title, keywords, isMatched }) => {
  return (
    <div className="glass-card rounded-3xl p-7 border border-slate-800 shadow-xl flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
          {title}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-extrabold border ${
            isMatched
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
              : "bg-rose-500/10 text-rose-400 border-rose-500/20"
          }`}
        >
          {keywords.length} Keywords
        </span>
      </div>

      {keywords.length === 0 ? (
        <div className="flex-1 border-2 border-dashed border-slate-800 rounded-2xl py-8 text-center flex flex-col items-center justify-center">
          <p className="text-slate-500 text-xs">No keywords found in this category</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2.5">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all duration-200 cursor-default hover:scale-105 ${
                isMatched
                  ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20"
                  : "bg-rose-500/10 text-rose-300 border-rose-500/30 hover:bg-rose-500/20"
              }`}
            >
              {isMatched ? "✓ " : "✕ "}
              {keyword}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default KeywordSection;