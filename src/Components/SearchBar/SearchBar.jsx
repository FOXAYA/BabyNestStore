import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const searchQuery = e.target.value.trim();
    setQuery(searchQuery);
    if (searchQuery) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`); 
    } else {
      navigate('/shop'); 
    }
  };


  return (
    <div>
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Type words ...."
          value={query}
          onChange={handleSearchChange}
    
        />
      </div>
    </div>
  );
};

export default SearchBar;