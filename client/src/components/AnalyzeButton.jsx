const AnalyzeButton = ({ loading, disabled }) => {
  return (
    <button
      disabled={disabled || loading}
      className="w-full py-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold transition shadow-xl disabled:bg-gray-400"
    >
      {loading ? (
        <div className="flex justify-center items-center gap-3">

          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

          Analyzing Resume...

        </div>
      ) : (
        "🚀 Analyze Resume"
      )}
    </button>
  );
};

export default AnalyzeButton;