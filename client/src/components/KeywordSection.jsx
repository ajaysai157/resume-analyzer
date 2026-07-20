const KeywordSection = ({
    title,
    keywords,
    bgColor,
    textColor,
}) => {

    return (

        <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-xl font-bold mb-5">
                {title}
            </h2>

            <div className="flex flex-wrap gap-3">

                {
                    keywords.map((keyword, index) => (

                        <span
                            key={index}
                            className={`${bgColor} ${textColor} px-4 py-2 rounded-full font-medium`}
                        >
                            {keyword}
                        </span>

                    ))
                }

            </div>

        </div>

    );

};

export default KeywordSection;