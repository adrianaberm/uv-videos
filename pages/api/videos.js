// Fake videos data
const videos = [{ id: 1, name: "video" }, { id: 2, name: "video" }, { id: 3, name: "video" }]

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(videos)
}