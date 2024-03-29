import { IoSearchOutline } from "react-icons/io5";

function SearchBar() {
  return (
    <div
      className="search-box"
      style={{
        padding: "0.75rem 1.5rem",
        borderRadius: "5rem",
        backgroundColor: " white",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "2rem",
      }}
    >
      <IoSearchOutline />
      <input type="text" placeholder="Search" style={{ backgroundColor: "transparent", width: "100%" }} />
    </div>
  );
}

export default SearchBar;
