import { FiZap } from "react-icons/fi";

const AnalyzeButton = ({
    loading,
    disabled,
}) => {

    return (

        <button
            type="submit"
            disabled={disabled || loading}
            className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex justify-center items-center gap-3

            ${
                disabled || loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
            }`}
        >

            {
                loading
                    ? (
                        <>
                            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Analyzing...
                        </>
                    )
                    : (
                        <>
                            <FiZap size={20}/>
                            Analyze Resume
                        </>
                    )
            }

        </button>

    );

};

export default AnalyzeButton;