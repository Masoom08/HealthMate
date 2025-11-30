const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YT_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

exports.searchMentalVideos = async (req, res) => {
  try {
    const query = req.query.q.toLowerCase();

    const url = `${YT_SEARCH_URL}?part=snippet&q=${encodeURIComponent(
      query
    )}&key=${YOUTUBE_API_KEY}&maxResults=20`;

    // Native fetch (Node 18+)
    const ytResponse = await fetch(url);
    const data = await ytResponse.json();

    res.json({ query, results: data });
  } catch (err) {
    console.error("YouTube API Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};