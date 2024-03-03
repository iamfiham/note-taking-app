import { IoSearchOutline } from "react-icons/io5";

function SearchBar() {
  return (
    <div
      className="search-box"
      style={{
        padding: "0.75rem 1.5rem",
        borderRadius: "5rem",
        backgroundColor: " #f6f8fa",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <IoSearchOutline />
      <input type="text" placeholder="Search" style={{ backgroundColor: "transparent", width: "300px" }} />
    </div>
  );
}

export default SearchBar;
