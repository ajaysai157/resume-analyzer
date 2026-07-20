import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const ScoreCard = ({ score }) => {

    let message = "Needs Improvement";

    if (score >= 80)
        message = "Excellent";

    else if (score >= 60)
        message = "Good Match";

    return (

        <div className="bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-2xl font-bold text-center mb-8">

                ATS Score

            </h2>

            <div className="w-48 mx-auto">

                <CircularProgressbar

                    value={score}

                    text={`${score}%`}

                    styles={buildStyles({

                        pathColor: "#4f46e5",

                        textColor: "#111827",

                        trailColor: "#e5e7eb",

                    })}

                />

            </div>

            <p className="text-center mt-6 text-xl font-semibold text-indigo-600">

                {message}

            </p>

        </div>

    );

};

export default ScoreCard;