export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  const episodeId = url.searchParams.get('episodeId');
  
  if (!episodeId) {
    return new Response(JSON.stringify({ error: "Missing query 'episodeId'" }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  try {
    const response = await fetch(`https://api.consumet.tv/stream/anime/gogoanime/watch/${encodeURIComponent(episodeId)}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    
    const data = await response.json();
    
    return new Response(JSON.stringify(data), { 
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to get video links" }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
