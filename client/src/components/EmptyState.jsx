import { FiFileText, FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div className="glass-card rounded-3xl p-16 text-center border border-dashed border-slate-800 my-6">
      <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6">
        <FiFileText size={38} />
      </div>
      <h2 className="text-2xl font-black text-white tracking-tight">
        No Analysis History Found
      </h2>
      <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto leading-relaxed">
        You haven't uploaded any resumes for analysis yet or no matches were found for your search query.
      </p>
      <Link
        to="/analyze"
        className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-2xl text-xs font-extrabold shadow-glow transition"
      >
        <FiPlusCircle size={16} />
        <span>Analyze Resume Now</span>
      </Link>
    </div>
  );
};

export default EmptyState;