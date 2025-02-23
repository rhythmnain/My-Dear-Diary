const Diary = require("../models/diary.model");

exports.addEntry = async (req, res) => {
    try {
        const { title, content, mood } = req.body;
        const newEntry = new Diary({ title, content, mood });
        await newEntry.save();
        res.status(201).json({ message: "Entry added successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error adding entry", error });
    }
};

exports.getEntries = async (req, res) => {
    try {
        const entries = await Diary.find().sort({ createdAt: -1 });
        res.json(entries);
    } catch (error) {
        res.status(500).json({ message: "Error fetching entries", error });
    }
};

exports.searchEntries = async (req, res) => {
    try {
        const { query } = req.params;
        const results = await Diary.find({
            $or: [{ title: { $regex: query, $options: "i" } }, { content: { $regex: query, $options: "i" } }],
        });
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: "Error searching entries", error });
    }
};