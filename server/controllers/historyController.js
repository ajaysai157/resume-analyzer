import Analysis from "../models/Analysis.js";

// Get all analyses of logged-in user
const getHistory = async (req, res) => {
    try {
        const history = await Analysis.find({
            user: req.user.id,
        }).sort({
            createdAt: -1,
        });

        return res.status(200).json({
            success: true,
            count: history.length,
            history,
        });

    } catch (error) {
        console.error("Get History Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch history",
        });
    }
};

// Get single analysis
const getHistoryById = async (req, res) => {
    try {

        const analysis = await Analysis.findOne({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!analysis) {
            return res.status(404).json({
                success: false,
                message: "Analysis not found",
            });
        }

        return res.status(200).json({
            success: true,
            analysis,
        });

    } catch (error) {
        console.error("Get Analysis Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch analysis",
        });
    }
};

// Delete analysis
const deleteHistory = async (req, res) => {
    try {

        const analysis = await Analysis.findOne({
            _id: req.params.id,
            user: req.user.id,
        });

        if (!analysis) {
            return res.status(404).json({
                success: false,
                message: "Analysis not found",
            });
        }

        await analysis.deleteOne();

        return res.status(200).json({
            success: true,
            message: "Analysis deleted successfully",
        });

    } catch (error) {

        console.error("Delete Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Failed to delete analysis",
        });
    }
};

export default {
    getHistory,
    getHistoryById,
    deleteHistory,
};