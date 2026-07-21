import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import Navbar from "../components/Navbar";
import HistoryCard from "../components/HistoryCard";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";

import {
  getHistory,
  deleteHistory,
} from "../api/historyApi";

import { useNavigate } from "react-router-dom";

const History = () => {

  const navigate = useNavigate();

  const [history, setHistory] = useState([]);

  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {

    try {

      const data = await getHistory();

      setHistory(data.history);

      setFiltered(data.history);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchHistory();

  }, []);

  useEffect(() => {

    const result = history.filter((item) =>
      item.resumeName
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

    setFiltered(result);

  }, [search, history]);

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this analysis?"))
      return;

    await deleteHistory(id);

    const updated = history.filter(
      (item) => item._id !== id
    );

    setHistory(updated);

    setFiltered(updated);

  };

  const handleView = (id) => {

    navigate(`/history/${id}`);

  };

  if (loading)
    return <LoadingSpinner />;

  return (

    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">

        <div className="max-w-7xl mx-auto px-8 py-10">

          <div className="flex justify-between items-center flex-wrap gap-5">

            <div>

              <h1 className="text-5xl font-bold text-slate-800">

                Analysis History

              </h1>

              <p className="text-slate-500 mt-3">

                View all your previous ATS reports.

              </p>

            </div>

            <div className="relative">

              <FiSearch
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search Resume..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="pl-12 pr-5 py-4 rounded-2xl w-80 border focus:ring-4 focus:ring-indigo-100"
              />

            </div>

          </div>

          <div className="mt-10 bg-white rounded-3xl shadow-lg p-6">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-2xl font-bold">

                Total Reports

              </h2>

              <span className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full font-bold">

                {filtered.length}

              </span>

            </div>

            {filtered.length === 0 ? (

              <EmptyState />

            ) : (

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

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

    </>

  );

};

export default History;