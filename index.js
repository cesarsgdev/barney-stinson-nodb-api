const express = require("express");
const app = express();
const cors = require("cors");
const quotes = require("./data/quotes");

app.use(cors());
app.use(express.static("public"));

const PORT = process.env.PORT || 8822;

app.get("/quote", (req, res) => {
  const quoteID = Math.floor(Math.random() * 101);
  res.json({ quote: quotes[quoteID].quote });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
