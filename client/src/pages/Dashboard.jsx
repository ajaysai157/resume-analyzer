import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import RecentAnalysisCard from "../components/RecentAnalysisCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import { getDashboardData } from "../api/dashboardApi";

const Dashboard = () => {

    const [loading, setLoading] = useState(true);

    const [history, setHistory] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const data = await getDashboardData();

                setHistory(data.history);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

        fetchData();

    }, []);

    if (loading) {

        return <LoadingSpinner />;

    }

    const total = history.length;

    const highest = total
        ? Math.max(...history.map(item => item.atsScore))
        : 0;

    const average = total
        ? Math.round(
              history.reduce(
                  (sum, item) => sum + item.atsScore,
                  0
              ) / total
          )
        : 0;

    const recent = [...history]
        .sort(
            (a, b) =>
                new Date(b.createdAt) -
                new Date(a.createdAt)
        )
        .slice(0, 5);

    return (

        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">

                <h1 className="text-4xl font-bold">

                    Welcome 👋

                </h1>

                <p className="text-gray-500 mt-2">

                    Here's your resume analytics overview.

                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    <StatCard
                        title="Total Analyses"
                        value={total}
                        color="text-indigo-600"
                    />

                    <StatCard
                        title="Average ATS"
                        value={`${average}%`}
                        color="text-green-600"
                    />

                    <StatCard
                        title="Highest ATS"
                        value={`${highest}%`}
                        color="text-purple-600"
                    />

                </div>

                <div className="mt-12">

                    <div className="flex justify-between items-center">

                        <h2 className="text-2xl font-bold">

                            Recent Analyses

                        </h2>

                        <Link
                            to="/history"
                            className="text-indigo-600 font-semibold"
                        >
                            View All →
                        </Link>

                    </div>

                    <div className="space-y-4 mt-6">

                        {recent.length > 0 ? (
                            recent.map((analysis) => (
                                <RecentAnalysisCard
                                    key={analysis._id}
                                    analysis={analysis}
                                />
                            ))
                        ) : (
                            <p className="text-gray-500">
                                No analyses yet.
                            </p>
                        )}

                    </div>

                </div>

                <div className="mt-12 flex gap-4">

                    <Link
                        to="/analyze"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
                    >
                        Analyze Resume
                    </Link>

                    <Link
                        to="/history"
                        className="bg-gray-200 px-6 py-3 rounded-xl"
                    >
                        View History
                    </Link>

                </div>

            </div>

        </>

    );

};

export default Dashboard;