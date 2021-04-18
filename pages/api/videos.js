// Fake videos data
const videos = [{ id: 1, name: "Lorem ipsum dolor 1" }, { id: 2, name: "Lorem ipsum dolor 2" }, { id: 3, name: "Lorem ipsum dolor 3" }]

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(videos)
}