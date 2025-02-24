import React from "react";
import Prompt from "../components/Prompt";
const Home = () => {
    return (
        <div>
            <h1>Welcome to My Dear Diary</h1>
            <p>This is your personal space to store your memories and thoughts.</p>
            <Prompt /> {/* Display the daily question */}        
        </div>
    );
};

export default Home;