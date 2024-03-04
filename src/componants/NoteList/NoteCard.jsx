import { Link } from "react-router-dom";
import "./NoteCard.css";
import { TbEdit } from "react-icons/tb";

function NoteCard({ id, heading, note, date }) {
  return (
    <div className="note-card">
      <p className="date">{date}</p>
      <h4 className="note-heading">{heading}</h4>
      <Link to={`/edit/${id}`}>
        <span className="edit-icon">
          <TbEdit />
        </span>
      </Link>
      <p className="note-caption">{note}</p>
    </div>
  );
}

export default NoteCard;
