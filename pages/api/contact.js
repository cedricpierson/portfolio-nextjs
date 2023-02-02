export default function handler(req, res) {
  if (req.method === "POST") {
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: "John Doe" });
  }
}
