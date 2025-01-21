import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import img1 from "../assets/images/logo.png";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const searchQuery = e.target.value.trim();
    setQuery(searchQuery);
  };

  const handleCloseSearch = () => {
    setIsSearchVisible(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      setIsSearchVisible(false);
    }
  };

  if (!isSearchVisible) {
    return null;
  }

  return (
    <div className="search-bar-container">
      <img src={img1} alt="Logo" className="search-bar-logo" />
      <input
        type="text"
        className="search-bar-input"
        placeholder="Type words ...."
        value={query}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        aria-label="Search products"
      />
      <button
        className="search-bar-close-btn"
        onClick={handleCloseSearch}
        aria-label="Close search"
      >
        &times;
      </button>
    </div>
  );
};

export default SearchBar;
