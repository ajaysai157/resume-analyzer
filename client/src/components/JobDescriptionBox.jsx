const JobDescriptionBox = ({ value, onChange }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-3">

        Job Description

      </h2>

      <p className="text-gray-500 mb-6">

        Paste the complete Job Description.

      </p>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste Job Description..."
        className="w-full h-[320px] border rounded-2xl p-5 outline-none focus:ring-4 focus:ring-indigo-200 resize-none"
      />

      <div className="flex justify-between mt-4">

        <span className="text-gray-500">

          {value.length} Characters

        </span>

        <span className="text-indigo-600">

          Minimum 50 Characters

        </span>

      </div>

    </div>
  );
};

export default JobDescriptionBox;