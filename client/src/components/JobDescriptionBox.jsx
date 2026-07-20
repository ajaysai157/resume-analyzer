const MAX_LENGTH = 3000;

const JobDescriptionBox = ({
    value,
    onChange,
}) => {

    const remaining = MAX_LENGTH - value.length;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

            <div className="flex justify-between items-center mb-4">

                <h2 className="text-xl font-semibold">
                    Job Description
                </h2>

                <span
                    className={`text-sm ${
                        remaining < 200
                            ? "text-red-500"
                            : "text-gray-500"
                    }`}
                >
                    {value.length}/{MAX_LENGTH}
                </span>

            </div>

            <textarea
                rows={14}
                placeholder="Paste the complete Job Description here..."
                value={value}
                maxLength={MAX_LENGTH}
                onChange={(e) => onChange(e.target.value)}
                className="w-full resize-none rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <p className="mt-3 text-sm text-gray-500">
                Tip: Paste the full job description for more accurate ATS analysis.
            </p>

        </div>
    );
};

export default JobDescriptionBox;