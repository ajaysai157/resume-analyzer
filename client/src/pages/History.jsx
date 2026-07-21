import { useEffect, useState } from "react";
import { FiSearch, FiClock, FiFilter } from "react-icons/fi";
import Navbar from "../components/Navbar";
import HistoryCard from "../components/HistoryCard";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";
import { getHistory, deleteHistory } from "../api/historyApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const History = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const data = await getHistory();
      setHistory(data.history || []);
      setFiltered(data.history || []);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load history.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  useEffect(() => {
    const query = search.toLowerCase();
    const result = history.filter((item) =>
      (item.resumeName || item.jobDescription || item.overallFeedback || "")
        .toLowerCase()
        .includes(query)
    );
    setFiltered(result);
  }, [search, history]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this analysis report?"))
      return;

    try {
      await deleteHistory(id);
      const updated = history.filter((item) => item._id !== id);
      setHistory(updated);
      setFiltered(updated);
      toast.success("Analysis report deleted.");
    } catch (err) {
      toast.error("Failed to delete report.");
    }
  };

  const handleView = (id) => {
    navigate(`/history/${id}`);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-slate-950 bg-mesh text-slate-100 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold mb-3">
              <FiClock /> Analysis Records
            </div>
            <h1 className="text-4xl font-black text-white tracking-tight">
              Analysis <span className="text-gradient">History</span>
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Review and manage all your past ATS compatibility reports
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px] sm:min-w-[340px]">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-base" />
            <input
              type="text"
              placeholder="Search reports by keyword or job..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 rounded-2xl pl-11 pr-4 py-3.5 text-xs text-slate-100 placeholder-slate-500 outline-none transition focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>
        </div>

        {/* History List */}
        <div className="glass-card rounded-3xl p-8 border border-slate-800 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              Saved Reports
            </h2>
            <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3.5 py-1 rounded-full text-xs font-bold">
              {filtered.length} Reports Found
            </span>
          </div>

          {filtered.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <HistoryCard
                  key={item._id}
                  analysis={item}
                  onDelete={handleDelete}
                  onView={handleView}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;