export default async function handler(req, res) {
    const id = req.query.id;
    if (!id) return res.status(400).json({ error: "Missing query 'id'" });
    
    try {
        const response = await fetch(`https://api.consumet.tv/stream/anime/gogoanime/info/${id}`);
        if (!response.ok) throw new Error("External API failed");
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to get anime info" });
    }
}
