const express = require("express");
server = express();
cors = require("cors");

let todos = {
  123: { id: "123", description: "Do laundry", completed: false },
  223: { id: "223", description: "Go for a run", completed: true },
  221: { id: "221", description: "Go for shopping", completed: false },
};

require("dotenv").config();
server.use(cors());

server.get("/", (req, res) => {
  res.json(todos);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
});
