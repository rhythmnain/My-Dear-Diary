const express = require("express");
const router = express.Router();
const { addEntry, getEntries, searchEntries } = require("../controllers/diary.controller");

// Default route to check if API is working
router.get("/", (req, res) => {
    res.json({ message: "Diary API is working!" });
});

// Diary routes
router.post("/add", addEntry);
router.get("/all", getEntries);
router.get("/search/:query", searchEntries);

module.exports = router;
