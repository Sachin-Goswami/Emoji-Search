// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import emojisData from "./emojis.json";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmojis, setFilteredEmojis] = useState(emojisData);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredEmojis = emojisData.filter((emoji) =>
      emoji.name.toLowerCase().includes(searchTerm)
    );
    setFilteredEmojis(filteredEmojis);
  };

  return (
    <div className="App">
      <Header />{" "}
      {/* Include the Header component within the return statement */}
      <h1>Emoji Search</h1>
      <input
        type="text"
        placeholder="Search emoji by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="emoji-container">
        {filteredEmojis.length === 0 ? (
          <p>No Emoji Found</p>
        ) : (
          filteredEmojis.map((emoji, index) => (
            <div key={index} className="emoji-item">
              <div className="emoji">{emoji.emoji}</div>
              <div className="emoji-name">{emoji.name}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
