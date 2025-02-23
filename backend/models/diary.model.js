const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
    title: String,
    content: String,
    mood: String,
    createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model("Diary", diarySchema);