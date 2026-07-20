import { useState } from "react";

import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import JobDescriptionBox from "../components/JobDescriptionBox";
import AnalyzeButton from "../components/AnalyzeButton";
import ScoreCard from "../components/ScoreCard";
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

            <div className="max-w-7xl mx-auto px-6 py-10">

                <h1 className="text-4xl font-bold text-center mb-10">

                    AI Resume Analyzer

                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="grid lg:grid-cols-2 gap-8"
                >

                    <UploadBox
                        file={file}
                        setFile={setFile}
                    />

                    <JobDescriptionBox
                        value={jobDescription}
                        onChange={setJobDescription}
                    />

                    <div className="lg:col-span-2">

                        <AnalyzeButton
                            loading={loading}
                            disabled={
                                !file ||
                                !jobDescription.trim()
                            }
                        />

                    </div>

                </form>

                {
                analysis && (

                    <ResultsDashboard
                        analysis={analysis}
                    />

                )
            }   

            </div>

        </>

    );

};

export default Analyze;