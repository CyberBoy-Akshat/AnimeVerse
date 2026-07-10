export default async function handler(req, res) {
    const query = req.query.q;
    if (!query) return res.status(400).json({ error: "Missing query 'q'" });
    
    try {
        const response = await fetch(`https://api.consumet.tv/stream/anime/gogoanime/${query}`);
        if (!response.ok) throw new Error("External API failed");
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to search anime" });
    }
}
