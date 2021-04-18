const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "manager",
  database: "shopping",
  password: "11111111",
});

const port = 3001;

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ username: "" });
});

app.get("/api/shop", (req, res) => {});

app.get("/shop", async (req, res) => {
  const query = "SELECT * FROM item";
  try {
    const data = await pool.query(query);
    console.log(data[0]);
    return res.json(data[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on potr ${port}`);
});
