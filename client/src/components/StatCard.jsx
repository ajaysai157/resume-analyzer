const StatCard = ({ title, value, icon: Icon, colorGradient, badgeText }) => {
  return (
    <div className="glass-card rounded-3xl p-6 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-slate-700 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {title}
          </p>
          <h2 className="text-4xl font-extrabold mt-3 text-white tracking-tight">
            {value}
          </h2>
          {badgeText && (
            <span className="inline-block mt-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800/80 text-indigo-400 border border-slate-700/60">
              {badgeText}
            </span>
          )}
        </div>
        {Icon && (
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${colorGradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon size={24} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;