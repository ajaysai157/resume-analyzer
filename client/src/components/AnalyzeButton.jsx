import { FiCpu, FiLoader } from "react-icons/fi";

const AnalyzeButton = ({ loading, disabled }) => {
  return (
    <button
      disabled={disabled || loading}
      type="submit"
      className="w-full py-5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white text-base font-extrabold shadow-glow transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transform hover:-translate-y-0.5"
    >
      {loading ? (
        <div className="flex items-center gap-3">
          <FiLoader className="animate-spin text-xl text-white" />
          <span>Gemini AI Analyzing Resume...</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <FiCpu className="text-xl" />
          <span>Analyze Resume with AI</span>
        </div>
      )}
    </button>
  );
};

export default AnalyzeButton;