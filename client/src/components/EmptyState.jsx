import { FiFileText } from "react-icons/fi";

const EmptyState = () => {

    return (

        <div className="text-center py-20">

            <FiFileText
                className="mx-auto text-gray-400"
                size={70}
            />

            <h2 className="text-2xl font-bold mt-5">

                No Analysis Found

            </h2>

            <p className="text-gray-500 mt-2">

                Analyze your first resume to see it here.

            </p>

        </div>

    );

};

export default EmptyState;