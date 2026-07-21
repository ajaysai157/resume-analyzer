import { useDropzone } from "react-dropzone";
import { FiUploadCloud, FiFileText } from "react-icons/fi";

const UploadBox = ({ file, setFile }) => {
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length) {
      setFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`rounded-3xl border-2 border-dashed transition-all duration-300 cursor-pointer
      ${
        isDragActive
          ? "border-indigo-600 bg-indigo-50 scale-[1.02]"
          : "border-slate-300 bg-white hover:border-indigo-500 hover:shadow-xl"
      }`}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col justify-center items-center min-h-[420px] p-10">

        <div className="bg-indigo-100 p-6 rounded-full">

          <FiUploadCloud
            size={65}
            className="text-indigo-600"
          />

        </div>

        <h2 className="text-2xl font-bold mt-8">
          Upload Resume
        </h2>

        <p className="text-gray-500 text-center mt-3 leading-7">

          Drag & Drop your Resume here

          <br />

          or click to browse

        </p>

        <div className="mt-8">

          <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">

            PDF only

          </span>

        </div>

        {file && (

          <div className="mt-10 bg-green-100 text-green-700 rounded-xl px-5 py-4 flex items-center gap-3">

            <FiFileText size={24} />

            <div>

              <p className="font-semibold">
                Resume Uploaded
              </p>

              <p className="text-sm">
                {file.name}
              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default UploadBox;