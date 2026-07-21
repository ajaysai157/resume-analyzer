const InfoCard = ({
  title,
  icon,
  items,
  color,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 h-full">

      {/* Header */}

      <div className="flex items-center gap-4 mb-8">

        <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl">

          {icon}

        </div>

        <div>

          <h2 className={`text-2xl font-bold ${color}`}>
            {title}
          </h2>

          <p className="text-slate-500 text-sm mt-1">
            {items.length} Points Found
          </p>

        </div>

      </div>

      {/* Body */}

      {items.length === 0 ? (

        <div className="border-2 border-dashed border-slate-200 rounded-2xl py-10 text-center">

          <p className="text-slate-500">

            Nothing to display

          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {items.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all duration-300"
            >

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${color.replace(
                  "text",
                  "bg"
                )}`}
              >
                ✓
              </div>

              <p className="text-slate-700 leading-7">
                {item}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default InfoCard;