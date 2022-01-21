const transactions = require("../controllers/transactionController");
// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// Create the Express app.
const app = express();
app.use(cors());
app.use(express.json());

app.use("/transactions", transactions);
// The home route.
app.get("/", (_, response) => {
  response.send("Welcome to YOUR TRANSACTIONS");
});

// Star (*) matches anything we haven't matched yet.
app.get("*", (_, response) => {
  response.status(404).json({ error: "Page not found" });
});

// Export our app for `server.js`.
module.exports = app;
