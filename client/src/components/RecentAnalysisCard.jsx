import { useNavigate } from "react-router-dom";

const RecentAnalysisCard = ({ analysis }) => {

    const navigate = useNavigate();

    return (

        <div className="bg-white rounded-xl shadow-sm p-5 flex justify-between items-center">

            <div>

                <h2 className="font-semibold">

                    Resume Analysis

                </h2>

                <p className="text-gray-500 text-sm">

                    {new Date(
                        analysis.createdAt
                    ).toLocaleDateString()}

                </p>

            </div>

            <div className="flex items-center gap-5">

                <span className="text-indigo-600 font-bold">

                    {analysis.atsScore}%

                </span>

                <button

                    onClick={() =>
                        navigate(`/history/${analysis._id}`)
                    }

                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg"

                >

                    View

                </button>

            </div>

        </div>

    );

};

export default RecentAnalysisCard;