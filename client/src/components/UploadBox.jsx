import { useDropzone } from "react-dropzone";
import { FiUploadCloud, FiFileText, FiX, FiCheckCircle } from "react-icons/fi";

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
    <div className="glass-card rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            Upload Resume
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Drag & drop your PDF resume for AI parsing
          </p>
        </div>
        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          PDF Format
        </span>
      </div>

      <div
        {...getRootProps()}
        className={`flex-1 min-h-[300px] rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-6 text-center ${
          isDragActive
            ? "border-indigo-500 bg-indigo-500/10 scale-[1.01]"
            : "border-slate-800 bg-slate-950/60 hover:border-indigo-500/50 hover:bg-slate-900/60"
        }`}
      >
        <input {...getInputProps()} />

        {file ? (
          <div className="w-full flex flex-col items-center animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-4">
              <FiCheckCircle size={32} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-2">
              File Ready for Analysis
            </span>
            <h3 className="font-bold text-white max-w-[260px] truncate text-base">
              {file.name}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {(file.size / (1024 * 1024)).toFixed(2)} MB • PDF Document
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
              }}
              className="mt-5 inline-flex items-center gap-1.5 bg-slate-800 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 border border-slate-700 hover:border-rose-500/40 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer"
            >
              <FiX size={14} /> Remove File
            </button>
          </div>
        ) : (
          <>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FiUploadCloud size={32} />
            </div>
            <h3 className="text-base font-bold text-slate-200">
              Drag & Drop your Resume here
            </h3>
            <p className="text-xs text-slate-400 mt-2 max-w-[240px]">
              Or click to browse your local device files
            </p>
            <span className="mt-4 text-[11px] font-semibold text-slate-500 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
              Max file size 10MB
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadBox;