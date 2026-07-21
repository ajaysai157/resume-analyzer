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

  <div className="min-h-screen bg-slate-50">

    <div className="max-w-7xl mx-auto px-8 py-10">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Welcome Back 👋
          </h1>

          <p className="text-slate-500 mt-2">
            Here's an overview of your resume analyses.
          </p>
        </div>

        <Link
          to="/analyze"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
        >
          + Analyze Resume
        </Link>

      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-10">

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

          <p className="text-gray-500 text-sm">
            Total Analyses
          </p>

          <h2 className="text-5xl font-bold mt-3 text-indigo-600">
            {total}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

          <p className="text-gray-500 text-sm">
            Average ATS Score
          </p>

          <h2 className="text-5xl font-bold mt-3 text-green-600">
            {average}%
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

          <p className="text-gray-500 text-sm">
            Highest ATS Score
          </p>

          <h2 className="text-5xl font-bold mt-3 text-purple-600">
            {highest}%
          </h2>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-8 mt-12">

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

        <div className="mt-6 space-y-5">

          {recent.length > 0 ? (
            recent.map((analysis) => (
              <RecentAnalysisCard
                key={analysis._id}
                analysis={analysis}
              />
            ))
          ) : (
            <div className="py-20 text-center">

              <h3 className="text-xl font-semibold">
                No Resume Analyses Yet
              </h3>

              <p className="text-gray-500 mt-3">
                Start by analyzing your first resume.
              </p>

              <Link
                to="/analyze"
                className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl"
              >
                Analyze Resume
              </Link>

            </div>
          )}

        </div>

      </div>

    </div>

  </div>
</>

    );

};

export default Dashboard;