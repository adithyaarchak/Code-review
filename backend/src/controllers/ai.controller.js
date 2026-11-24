const aiservice = require("../service/ai.service");

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: "code is required" });
    }

    try {
        const response = await aiservice(code);
        res.send(response);
    } catch (err) {
        console.error("Gemini error:", err.status, err.message);

        if (err.status === 429) {
            return res.status(429).json({
                error: "The AI service is busy right now. Please try again in a moment.",
            });
        }

        res.status(500).json({ error: "Something went wrong while generating the review." });
    }
};