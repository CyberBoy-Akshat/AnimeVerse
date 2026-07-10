export default async function handler(req, res) {
    const episodeId = req.query.episodeId;
    if (!episodeId) return res.status(400).json({ error: "Missing query 'episodeId'" });
    
    try {
        const response = await fetch(`https://api.consumet.tv/stream/anime/gogoanime/watch/${episodeId}`);
        if (!response.ok) throw new Error("External API failed");
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to get video links" });
    }
}
