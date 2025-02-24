import React, { useState, useEffect } from "react";

const prompts = [
    "How was your day? 😊",
    "What made you smile today? 😄",
    "What challenges did you overcome today? 💪",
    "If today had a theme song, what would it be? 🎵",
    "What is one thing you're grateful for? 🙏",
    "What keeps you going every day? 🚀",
    "Describe today in one word! ✍️",
    "Take a moment to appreciate a fond memory that always brings a smile to your face",
    "Explain what recovery means to you.",
    "What are some great words that you read recently?",
    "What is our favorite part of your life?",
    "Express gratitude to the person who has been with you through the thoughest times.",
    "Write and share a Letter of thankfulness to someone who has been your well-wisher.",
    "Write about a little thing you're grateful for despite feeling sad."
];

const Prompt = () => {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        
        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        setQuestion(randomPrompt);
    }, []);

    return (
        <div className="prompt-container">
           <h2>📖 Today's Thought:</h2>
           <p className="prompt-text">✨ {question} ✨</p> 
        </div>
    );
};

export default Prompt;