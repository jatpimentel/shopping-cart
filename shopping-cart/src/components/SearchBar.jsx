import React from "react";
import "./SearchBar.css"; // Import the CSS for styling

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-btn">
        <i className="fas fa-search"></i>{" "}
        {/* Using FontAwesome icon for search */}
      </button>
    </div>
  );
};

export default SearchBar;
