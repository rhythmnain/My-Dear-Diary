import React, { useEffect, useState } from "react";
import axios from "axios";
import Prompt from "../components/Prompt";

const Home = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/entries")
      .then(response => setEntries(response.data))
      .catch(error => console.error("Error fetching entries", error));
  }, []);

  return (
    <div>
      <h1>Welcome to My Dear Diary</h1>
      <p>This is your personal space to store your memories and thoughts.</p>
      <Prompt />
      
      <h2>📜 Your Past Entries:</h2>
      {entries.length > 0 ? (
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <strong>{entry.date}</strong>: {entry.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>No diary entries yet! ✍️ Start writing!</p>
      )}
    </div>
  );
};

export default Home;
