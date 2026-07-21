const KeywordSection = ({
  title,
  keywords,
  bgColor,
  textColor,
}) => {
  return (
    <div>

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-slate-800">
          {title}
        </h2>

        <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">
          {keywords.length} Keywords
        </span>

      </div>

      {keywords.length === 0 ? (
        <div className="border-2 border-dashed border-slate-200 rounded-2xl py-10 text-center">

          <p className="text-slate-500">
            No Keywords Found
          </p>

        </div>
      ) : (
        <div className="flex flex-wrap gap-4">

          {keywords.map((keyword, index) => (
            <div
              key={index}
              className={`
                ${bgColor}
                ${textColor}
                px-5
                py-3
                rounded-2xl
                font-semibold
                shadow-sm
                hover:scale-105
                hover:shadow-md
                transition-all
                duration-300
                cursor-default
              `}
            >
              {keyword}
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default KeywordSection;