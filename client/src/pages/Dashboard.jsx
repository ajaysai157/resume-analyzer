import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import RecentAnalysisCard from "../components/RecentAnalysisCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import { getDashboardData } from "../api/dashboardApi";
import { useAuth } from "../context/AuthContext";
import { FiPlusCircle, FiBarChart2, FiAward, FiZap, FiArrowRight, FiFileText } from "react-icons/fi";

const Dashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardData();
        setHistory(data.history || []);
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
  const highest = total ? Math.max(...history.map((item) => item.atsScore)) : 0;
  const average = total
    ? Math.round(history.reduce((sum, item) => sum + item.atsScore, 0) / total)
    : 0;

  const recent = [...history]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-slate-950 bg-mesh text-slate-100 pb-16">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero Welcome Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden mb-10">
          <div className="absolute -right-10 -top-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold mb-4">
                <FiZap className="text-indigo-400" /> AI Resume Optimizer Active
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Welcome Back, <span className="text-gradient">{user?.name || "Job Seeker"}</span> 👋
              </h1>
              <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl leading-relaxed">
                Track your resume performance, ATS compatibility, and keyword matches against target job descriptions.
              </p>
            </div>

            <Link
              to="/analyze"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white px-7 py-4 rounded-2xl font-bold shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
            >
              <FiPlusCircle size={18} />
              <span>New Resume Analysis</span>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <StatCard
            title="Total Analyses"
            value={total}
            icon={FiFileText}
            colorGradient="from-indigo-600 to-blue-600"
            badgeText="Lifetime Total"
          />
          <StatCard
            title="Average ATS Score"
            value={`${average}%`}
            icon={FiBarChart2}
            colorGradient="from-purple-600 to-pink-600"
            badgeText="Overall Match"
          />
          <StatCard
            title="Highest ATS Score"
            value={`${highest}%`}
            icon={FiAward}
            colorGradient="from-emerald-500 to-teal-600"
            badgeText="Best Performance"
          />
        </div>

        {/* Recent Analyses Feed */}
        <div className="glass-card rounded-3xl p-8 border border-slate-800 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight">
                Recent Analyses
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Your latest ATS compatibility reports
              </p>
            </div>

            <Link
              to="/history"
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group"
            >
              <span>View Full History</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="space-y-4">
            {recent.length > 0 ? (
              recent.map((analysis) => (
                <RecentAnalysisCard key={analysis._id} analysis={analysis} />
              ))
            ) : (
              <div className="py-16 text-center glass-card rounded-2xl border border-dashed border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-4 border border-indigo-500/20">
                  <FiFileText size={30} />
                </div>
                <h3 className="text-lg font-bold text-white">
                  No Resume Reports Yet
                </h3>
                <p className="text-slate-400 text-xs mt-1 max-w-md mx-auto">
                  Upload your resume against a job description to get instant ATS scores and actionable feedback.
                </p>
                <Link
                  to="/analyze"
                  className="inline-flex items-center gap-2 mt-5 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-glow"
                >
                  <FiPlusCircle /> Analyze First Resume
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;