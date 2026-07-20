import { FiMessageCircle } from "react-icons/fi";

const FeedbackCard = ({
    feedback,
}) => {

    return (

        <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex items-center gap-3 mb-5">

                <FiMessageCircle
                    className="text-indigo-600"
                    size={28}
                />

                <h2 className="text-xl font-bold">

                    AI Feedback

                </h2>

            </div>

            <p className="leading-8 text-gray-700">

                {feedback}

            </p>

        </div>

    );

};

export default FeedbackCard;