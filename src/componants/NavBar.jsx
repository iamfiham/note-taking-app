import SearchBar from "./NavBar/SearchBar";
import "./NavBar/NavBar.css";
import { FaPlus } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <div className="nav-bar">
      <h2>notes.</h2>
      <SearchBar />
      {/* <Link to="/create">
        <button>
          Add new <FaPlus />
        </button>
      </Link> */}
      {location.pathname === "/create" ? (
        <Link to="/">
          <button>
            Save <FaPlus />
          </button>
        </Link>
      ) : location.pathname === "/" ? (
        <Link to="/create">
          <button>
            Add New <FaPlus />
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button>
            Done <FaPlus />
          </button>
        </Link>
      )}
    </div>
  );
}

export default NavBar;
