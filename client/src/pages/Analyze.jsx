import { useState } from "react";
import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import JobDescriptionBox from "../components/JobDescriptionBox";
import AnalyzeButton from "../components/AnalyzeButton";
import ResultsDashboard from "../components/ResultsDashboard";
import { analyzeResume } from "../api/analyzeApi";
import toast from "react-hot-toast";
import { FiCpu } from "react-icons/fi";

const Analyze = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      return toast.error("Please upload your resume in PDF format.");
    }

    if (jobDescription.trim().length < 50) {
      return toast.error("Please paste a complete job description (minimum 50 characters).");
    }

    try {
      setLoading(true);
      const data = await analyzeResume(file, jobDescription);
      setAnalysis(data.analysis);
      toast.success("Resume Analysis Completed!");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "Analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 bg-mesh text-slate-100 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-extrabold mb-4">
            <FiCpu className="text-indigo-400" /> Powered by GROQ AI
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            AI Resume <span className="text-gradient">Analyzer</span>
          </h1>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            Compare your resume against any job description to calculate ATS compatibility, identify missing keywords, and get tailored AI recommendations.
          </p>
        </div>

        {/* Input Workspace Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <UploadBox file={file} setFile={setFile} />
            <JobDescriptionBox value={jobDescription} onChange={setJobDescription} />
          </div>

          <div className="max-w-2xl mx-auto">
            <AnalyzeButton
              loading={loading}
              disabled={!file || !jobDescription.trim() || jobDescription.trim().length < 50}
            />
          </div>
        </form>

        {/* Results Section */}
        {analysis && (
          <div className="mt-16 animate-fadeIn">
            <ResultsDashboard analysis={analysis} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Analyze;