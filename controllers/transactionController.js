const express = require("express");
const req = require("express/lib/request");
const transactionsArray = require("../models/transactions");
const transactions = express.Router();

transactions.get("/", (_, response) => {
  response.json(transactionsArray);
});

transactions.get("/:index", (req, res) => {
  transactionsArray[req.params.index]
    ? res.json(transactionsArray[req.params.index])
    : res.status(404).json({ error: "Page not found" });
});

transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray);
});

transactions.delete("/:index", (req, res) => {
  if (transactionsArray[req.params.index]) {
    const [deletedTransaction] = transactionsArray.splice(req.params.index, 1);
    res.status(200).json(transactionsArray);
  }
});
transactions.put("/:index", (req, res) => {
  transactionsArray[req.params.index] = req.body;
  res.status(200).json(transactionsArray);
});

module.exports = transactions;
