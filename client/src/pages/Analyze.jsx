import { useState } from "react";

import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import JobDescriptionBox from "../components/JobDescriptionBox";
import AnalyzeButton from "../components/AnalyzeButton";
import ResultsDashboard from "../components/ResultsDashboard";

import { analyzeResume } from "../api/analyzeApi";

const Analyze = () => {

    const [file, setFile] = useState(null);

    const [jobDescription, setJobDescription] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [analysis, setAnalysis] =
        useState(null);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!file) {

            return alert("Please upload your resume.");

        }

        if (jobDescription.trim().length < 50) {

            return alert(
                "Please paste a complete Job Description."
            );

        }

        try {

            setLoading(true);

            const data =
                await analyzeResume(
                    file,
                    jobDescription
                );

            setAnalysis(data.analysis);

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Analysis failed."
            );

        } finally {

            setLoading(false);

        }

    };

    return (
  <>
    <Navbar />

    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-slate-800">
            AI Resume Analyzer
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Upload your resume and compare it against a Job Description using AI.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid xl:grid-cols-2 gap-10 items-start"
        >

          <UploadBox
            file={file}
            setFile={setFile}
          />

          <JobDescriptionBox
            value={jobDescription}
            onChange={setJobDescription}
          />

          <div className="xl:col-span-2">

            <AnalyzeButton
              loading={loading}
              disabled={!file || !jobDescription.trim()}
            />

          </div>

        </form>

        {analysis && (
          <div className="mt-14">
            <ResultsDashboard analysis={analysis} />
          </div>
        )}

      </div>

    </div>
  </>
);

};

export default Analyze;