const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Diary Entry Schema
const EntrySchema = new mongoose.Schema({
  date: { type: String, required: true },
  content: { type: String, required: true }
});

const Entry = mongoose.model("Entry", EntrySchema);

// API Routes
app.post("/add-entry", async (req, res) => {
  try {
    const newEntry = new Entry(req.body);
    await newEntry.save();
    res.status(201).json({ message: "Entry saved!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving entry" });
  }
});

app.get("/entries", async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: "Error fetching entries" });
  }
});

app.get("/", (req, res) => {
    res.send("Backend is running!");
});


// Server Listening
app.listen(5000, () => console.log("Server running on port 5000"));
