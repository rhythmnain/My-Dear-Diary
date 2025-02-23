const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const diaryRoutes = require("./routes/diary.routes");
app.use("/api/diary", diaryRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));  // Fixed variable name

app.listen(5000, () => console.log("Server is running on port 5000"));
