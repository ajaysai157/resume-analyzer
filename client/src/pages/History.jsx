import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import HistoryCard from "../components/HistoryCard";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";
import {
    getHistory,
    deleteHistory,
} from "../api/historyApi";

const History = () => {
    const navigate = useNavigate();
    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchHistory = async () => {

        try {

            const data = await getHistory();

            setHistory(data.history);

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchHistory();

    }, []);

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this analysis?"
        );

        if (!confirmDelete) return;

        await deleteHistory(id);

        setHistory((prev) =>
            prev.filter((item) => item._id !== id)
        );

    };

          const handleView = (id) => {

          navigate(`/history/${id}`);

      };

    if (loading)
        return <LoadingSpinner />;

    return (

        <>
            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-10">

                <h1 className="text-4xl font-bold mb-10">

                    Analysis History

                </h1>

                {

                    history.length === 0

                    ?

                    <EmptyState />

                    :

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {

                            history.map((item) => (

                                <HistoryCard

                                    key={item._id}

                                    analysis={item}

                                    onDelete={handleDelete}

                                    onView={handleView}

                                />

                            ))

                        }

                    </div>

                }

            </div>

        </>

    );

};

export default History;