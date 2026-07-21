const InfoCard = ({ title, icon, items, isPositive }) => {
  return (
    <div className="glass-card rounded-3xl p-7 border border-slate-800 shadow-xl flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg border ${
            isPositive
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
              : "bg-amber-500/10 text-amber-400 border-amber-500/30"
          }`}>
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-black text-white tracking-tight">{title}</h3>
            <p className="text-xs text-slate-400">{items.length} Key Insights</p>
          </div>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="flex-1 border-2 border-dashed border-slate-800 rounded-2xl py-8 text-center flex flex-col items-center justify-center">
          <p className="text-slate-500 text-xs">No points recorded</p>
        </div>
      ) : (
        <div className="space-y-3 flex-1">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition"
            >
              <div
                className={`w-5 h-5 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                  isPositive ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                }`}
              >
                {isPositive ? "✓" : "!"}
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoCard;