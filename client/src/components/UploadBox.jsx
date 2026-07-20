import { useDropzone } from "react-dropzone";
import { FiUploadCloud, FiFileText } from "react-icons/fi";

const UploadBox = ({ file, setFile }) => {
    
    const onDrop = (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
        }
    };

    const {
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({
        onDrop,
        accept: {
            "application/pdf": [".pdf"],
        },
        multiple: false,
    });

    return (
        <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-2xl p-10 cursor-pointer transition-all duration-300
            ${
                isDragActive
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-gray-300 bg-white hover:border-indigo-400"
            }`}
        >
            <input {...getInputProps()} />

            <div className="flex flex-col items-center gap-4">

                <FiUploadCloud
                    className="text-indigo-600"
                    size={60}
                />

                <h2 className="text-xl font-semibold">

                    Upload Resume

                </h2>

                <p className="text-gray-500 text-center">

                    Drag & Drop your PDF here

                    <br />

                    or click to browse

                </p>

                {
                    file && (

                        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg">

                            <FiFileText />

                            <span>

                                {file.name}

                            </span>

                        </div>

                    )
                }

            </div>

        </div>
    );
};

export default UploadBox;