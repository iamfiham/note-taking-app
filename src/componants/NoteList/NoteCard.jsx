import { Link } from "react-router-dom";
import "./NoteCard.css";
import { TbEdit } from "react-icons/tb";

function NoteCard() {
  return (
    <div className="note-card">
      <p className="date">02/05/2024</p>
      <h4 className="note-heading">First Note</h4>
      <Link to="/edit/:id">
        <span className="edit-icon">
          <TbEdit />
        </span>
      </Link>
      <p className="note-caption">
        Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you
        to include only the icons that your project is using
      </p>
    </div>
  );
}

export default NoteCard;
