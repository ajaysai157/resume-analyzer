import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const ScoreCard = ({ score }) => {

  let message = "Needs Improvement";
  let color = "#ef4444";
  let grade = "C";

  if (score >= 90) {
    message = "Outstanding";
    color = "#16a34a";
    grade = "A+";
  } else if (score >= 80) {
    message = "Excellent Match";
    color = "#22c55e";
    grade = "A";
  } else if (score >= 70) {
    message = "Good Match";
    color = "#3b82f6";
    grade = "B+";
  } else if (score >= 60) {
    message = "Average Match";
    color = "#f59e0b";
    grade = "B";
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <div className="flex justify-center">

          <div className="w-64">

            <CircularProgressbar
              value={score}
              text={`${score}%`}
              styles={buildStyles({
                pathColor: color,
                textColor: "#0f172a",
                trailColor: "#e2e8f0",
                strokeLinecap: "round",
                textSize: "16px",
              })}
            />

          </div>

        </div>

        {/* Right */}

        <div>

          <h2 className="text-4xl font-bold text-slate-800">

            ATS Resume Score

          </h2>

          <p className="text-slate-500 mt-3">

            This score indicates how well your resume matches
            the provided Job Description.

          </p>

          <div className="mt-8 flex gap-4 flex-wrap">

            <div
              className="px-6 py-3 rounded-2xl text-white font-bold"
              style={{ background: color }}
            >
              {message}
            </div>

            <div className="px-6 py-3 rounded-2xl bg-slate-100 font-bold">

              Grade : {grade}

            </div>

          </div>

          <div className="mt-10">

            <div className="flex justify-between mb-2">

              <span className="text-gray-500">

                Resume Compatibility

              </span>

              <span className="font-bold">

                {score}%

              </span>

            </div>

            <div className="h-4 rounded-full bg-slate-200 overflow-hidden">

              <div
                className="h-full rounded-full transition-all duration-700"
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