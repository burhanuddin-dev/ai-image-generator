import { HiOutlineSparkles } from "react-icons/hi2";
import { useState } from "react";

function Search({ setPrompt }) {
  const [inputValue, setInputValue] = useState("");

  function handleGenerate() {
    if (!inputValue.trim()) return;
    setPrompt(inputValue);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleGenerate();
    }
  }

  return (
    <div className="search-container">
      <div className="search-bar">
        <textarea
          type="text"
          className="search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="generate-container">
          <p>Press Enter to generate</p>
          <button className="generate-btn" onClick={handleGenerate}>
            <HiOutlineSparkles className="generate-logo" />
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
