import { FiEye, FiTrash2 } from "react-icons/fi";
const HistoryCard = ({
    analysis,
    onView,
    onDelete,
}) => {

    return (

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

            <div className="flex justify-between">

                <div>

                    <h2 className="text-xl font-semibold">

                        ATS Score

                    </h2>

                    <p className="text-indigo-600 text-3xl font-bold">

                        {analysis.atsScore}%

                    </p>

                </div>

                <div className="text-sm text-gray-500">

                    {new Date(
                        analysis.createdAt
                    ).toLocaleDateString()}

                </div>

            </div>

            <div className="mt-6 flex gap-4">

                <button

                    onClick={() =>
                        onView(analysis._id)
                    }

                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"

                >

                    <FiEye />

                    View

                </button>

                <button

                    onClick={() =>
                        onDelete(analysis._id)
                    }

                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg"

                >

                    <FiTrash2 />

                    Delete

                </button>

            </div>

        </div>

    );

};

export default HistoryCard;