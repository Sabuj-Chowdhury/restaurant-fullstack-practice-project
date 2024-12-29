const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("restaurant server!!!!!!!!");
});
app.listen(port, () => {
  console.log(`Server running at : ${port}`);
});
