import { useState } from "react";
import "../styles/moodTracker.css"; // Import CSS for styling

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const moods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😢", label: "Sad" },
  ];

  return (
    <div className="mood-tracker">
      <h2>How are you feeling today?</h2>
      <div className="mood-buttons">
        {moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => setSelectedMood(mood.label)}
            className={selectedMood === mood.label ? "selected" : ""}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      {selectedMood && <p className="selected-mood">You are feeling: {selectedMood}</p>}
    </div>
  );
};

export default MoodTracker;
