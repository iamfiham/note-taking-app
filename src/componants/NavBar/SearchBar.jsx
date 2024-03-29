import { IoSearchOutline } from "react-icons/io5";
import "./SearchBar.scss";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

function SearchBar({ searchTerm, setSearchTerm }) {
  const clearSearchBox = () => {
    setSearchTerm("");
  };

  return (
    <div className="search-box">
      <span>
        <FiSearch />
      </span>
      <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      {searchTerm ? (
        <span onClick={clearSearchBox}>
          <IoClose id="closeButton" />
        </span>
      ) : null}
    </div>
  );
}

export default SearchBar;
