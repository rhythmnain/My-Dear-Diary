import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewEntry = () => {
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!content.trim()) {
            alert("Diary entry cannot be empty");
            return;
        }
        try {
            await axios.post("http://localhost:5000/add-entry", {
                date: new Date().toLocaleDateString(),
                content,
              });
              alert("Entry saved! 📖");
              navigate("/"); // Redirect to home after saving
            } catch (error) {
              console.error("Error saving entry", error);
              alert("Something went wrong! 😔");
        }
    };
    return (
        <div className="entry-container">
          <h2>📝 Write Your Diary Entry</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              rows="5"
              placeholder="Write about your day here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit">Save Entry ✅</button>
          </form>
        </div>
      );
    };
    
    export default NewEntry;
