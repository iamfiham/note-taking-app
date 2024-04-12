import "./NavBar/NavBar.scss";
import { FaPlus } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaNoteSticky } from "react-icons/fa6";

function NavBar() {
  const location = useLocation();

  return (
    <div className="nav-bar">
      <Link to="/">
        <h2>
          <FaNoteSticky />
          note.
        </h2>
      </Link>
      {location.pathname === "/create" ? (
        <Link to="/">
          <button>
            <IoIosArrowBack />
          </button>
        </Link>
      ) : location.pathname === "/" ? (
        <Link to="/create">
          <button>
            <FaPlus />
          </button>
        </Link>
      ) : location.pathname === "/edit" ? (
        <Link to="/">
          <button>
            <IoIosArrowBack />
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button>
            <IoIosArrowBack />
          </button>
        </Link>
      )}
    </div>
  );
}

export default NavBar;
