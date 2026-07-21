import { FiEye, FiTrash2, FiFileText, FiCalendar } from "react-icons/fi";

const HistoryCard = ({
  analysis,
  onView,
  onDelete,
}) => {

  const score = analysis.atsScore;

  const badge =
    score >= 80
      ? "bg-green-100 text-green-700"
      : score >= 60
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  const status =
    score >= 80
      ? "Excellent"
      : score >= 60
      ? "Good Match"
      : "Needs Improvement";

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:-translate-y-1">

      {/* Header */}

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">

        <div className="flex justify-between items-start">

          <div>

            <div className="flex items-center gap-2">

              <FiFileText size={22} />

              <h2 className="font-semibold text-lg">
                Resume Analysis
              </h2>

            </div>

            <p className="text-indigo-100 text-sm mt-2">

              ATS Compatibility Report

            </p>

          </div>

          <div className="text-right">

            <h1 className="text-4xl font-bold">
              {score}%
            </h1>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="p-6">

        <div className="flex justify-between items-center">

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${badge}`}
          >
            {status}
          </span>

          <div className="flex items-center gap-2 text-slate-500 text-sm">

            <FiCalendar />

            {new Date(
              analysis.createdAt
            ).toLocaleDateString()}

          </div>

        </div>

        <div className="mt-6">

          <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

            <div
              className={`h-full ${
                score >= 80
                  ? "bg-green-500"
                  : score >= 60
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{
                width: `${score}%`,
              }}
            />

          </div>

        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <button
            onClick={() => onView(analysis._id)}
            className="flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
          >
            <FiEye />

            View
          </button>

          <button
            onClick={() => onDelete(analysis._id)}
            className="flex justify-center items-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
          >
            <FiTrash2 />

            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default HistoryCard;