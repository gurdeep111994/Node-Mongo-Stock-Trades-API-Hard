const express = require("express");
const router = express.Router();
const {
  createTrade, getTradeById, getAllTrades,
  deleteTrade, updateTrade,
  updateSelectedField } = require('../controllers/trades')

router.post("/", createTrade);

router.get("/:id", getTradeById);

router.get("/", getAllTrades);

router.delete("/:id", deleteTrade);

router.put("/:id", updateTrade);

router.patch("/:id", updateSelectedField);

module.exports = router;
