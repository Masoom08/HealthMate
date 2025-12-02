export const BASE_URL = "https://healthmate-evbq.onrender.com";

export const getMentalVideos = async (query) => {
  const url = `http://localhost:5000/mental/search?q=${query}`;
  const res = await fetch(url);
  return res.json();
};