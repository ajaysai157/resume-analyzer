import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";
import ResultsDashboard from "../components/ResultsDashboard";

import { getHistoryById } from "../api/historyApi";

const AnalysisDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [analysis, setAnalysis] = useState(null);

    useEffect(() => {

        const fetchAnalysis = async () => {

            try {

                const data = await getHistoryById(id);

                setAnalysis(data.analysis);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

        fetchAnalysis();

    }, [id]);

    if (loading)
        return <LoadingSpinner />;

    if (!analysis)
        return (

            <div className="text-center mt-20">

                Analysis not found.

            </div>

        );

    return (

        <>

            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">

                <button

                    onClick={() => navigate(-1)}

                    className="mb-8 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"

                >

                    ← Back

                </button>

                <ResultsDashboard

                    analysis={analysis}

                />

            </div>

        </>

    );

};

export default AnalysisDetails;